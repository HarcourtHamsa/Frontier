import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { name }: {name: string} = req.body;
  console.log(name);

  const record = await xata.db.Store.create({
    owners_id: "rec_cdbtu5n9a5tgamsmrlug",
    name: name,
  });

  if (!record) {
    res.end();
    return;
  }

  res.status(200).json({
    data: record,
  });
})
export default handler;
