import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const record = await xata.db.Products.filter({
    store_id: "rec_cdell1ojj84frlq3f1kg",
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
