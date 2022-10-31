import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const record = await xata.db.Store.filter({
    owners_id: "rec_cdbtu5n9a5tgamsmrlug",
  }).getMany();

  if (!record) {
    res.end();
    return;
  }

  res.status(200).json({
    data: record,
  });
});

export default handler;
