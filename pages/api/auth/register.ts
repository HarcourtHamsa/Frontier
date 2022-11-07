import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {

  const record = await xata.db.Users.filter({
    email: req.body.email
  }).getMany();

  if (record.length !== 0) {
    res.status(404);
    res.end();
    return;
  } else {
    console.log(req.body)
    const user = await xata.db.Users.create({
      ...req.body,
    });

    console.log(user)

    return res.status(200).json({ data: user });
  }
});

export default handler;
