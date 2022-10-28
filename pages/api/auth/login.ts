import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Router from "next/router";
import { getXataClient } from "../../../utils/xata.codegen";


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
    return res.status(200).json({ data: record });
  }
});

export default handler;
