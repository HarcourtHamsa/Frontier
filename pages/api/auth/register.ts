import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.email);
  const record = await xata.db.Users.filter({
    email: req.body.email
  }).getMany();

  console.log(record.length);

  if (record.length !== 0) {
    res.status(404);
    res.end();
    return;
  } else {
    const user = await xata.db.Users.create({
      ...req.body,
    });

    return res.status(200).json({ data: user });
  }
});

export default handler;
