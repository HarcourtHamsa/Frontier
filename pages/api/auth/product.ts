import { NextApiRequest, NextApiResponse} from "next";
import nc from "next-connect"
import { getXataClient } from "../../../utils/xata.codegen";


const xata = getXataClient();

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body)
  const product = xata.db.Products.create({...req.body})
  console.log(product)

  return res.status(200).json({data: product})
})

export default handler