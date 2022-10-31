import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { storeID } = req.body;

  const record = await xata.db.Products.filter({
    store_id: storeID,
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
