// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import path from 'path';
type Data = {
  name: string
}

export default async function blogBySlug(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let jsonDirectory = path.join(process.cwd(), "json/tutorials");
  let blog : any = await fs.readFile(jsonDirectory + "/" + req.query.slug +".json", "utf-8");
  res.status(200).json(blog)
}
