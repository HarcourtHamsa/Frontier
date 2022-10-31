import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getXataClient } from "../../../utils/xata.codegen";
const xata = getXataClient();
import { decode } from "jsonwebtoken";

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const jwt = req.cookies.frontier__jwt;
  const decodedData = decode(jwt);
  const accessToken = decodedData["0"].id;

  const record = await xata.db.Store.filter({
    owners_id: accessToken,
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
