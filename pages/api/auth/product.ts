import { NextApiRequest, NextApiResponse} from "next";
import nc from "next-connect"
import { getXataClient } from "../../../utils/xata.codegen";


const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const product = xata.db.Products.create({...req.body})

  return res.status(200).json({data: product})
})
