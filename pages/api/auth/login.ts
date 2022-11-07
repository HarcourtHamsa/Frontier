import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Router from "next/router";
import { getXataClient } from "../../../utils/xata.codegen";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const COOKIE_OPTIONS = {
  secure: process.env.NODE_ENV !== "development",
  httpOnly: true,
  signed: true,
  maxAge: 60 * 60 * 24,
  sameSite: "Strict",
  path: "/",
};

const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const record = await xata.db.Users.filter({
    email: req.body.email,
  }).getMany();

  if (!record) {
    return res.status(401).json({ message: "Invalid email/password" });
  } else if (record[0].password !== req.body.password) {
    return res.status(401).json({ message: "Invalid email/password" });
  } else {
    console.log(record)
    // generates JWT token
    const token = sign(
      {
        ...record,
        exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30, // 30 days validity
      },
      process.env.JWT_SECRET
    );

    res.setHeader(
      "Set-Cookie",
      serialize("frontier__jwt", token, COOKIE_OPTIONS)
    );

    return res.status(200).json({ data: record });
  }
});

export default handler;
