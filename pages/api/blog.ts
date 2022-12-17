// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {promises as fs} from 'fs';
import path from 'path';
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let directory = path.join(process.cwd(),"json/tutorials");
  let data : any = await fs.readFile(directory + "/learn-javascript.json","utf-8");

  res.status(200).json(JSON.parse(data))
}
