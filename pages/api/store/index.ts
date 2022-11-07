import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
import { decode } from "jsonwebtoken";

const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { name }: { name: string } = req.body;

  const jwt = req.cookies.frontier__jwt;
  const decodedData = decode(jwt);
  const accessToken = decodedData["0"].id;

  const record = await xata.db.Store.create({
    owners_id: accessToken,
    name: name,
  });

  if (!accessToken && record) {
    res.end();
    return;
  }

  res.status(200).json({
    data: record,
  });
});
export default handler;
