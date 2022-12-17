// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import path from 'path';
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let jsonDirectory = path.join(process.cwd(), "json/tutorials");
  let data: any = await fs.readdir(jsonDirectory);
  let blogs: any = [];
  let blog : any;
  for (var i = 0; i < data.length; i++) {
     blog = await fs.readFile(jsonDirectory + "/" + data[i], "utf-8");
    blogs.push(JSON.parse(blog));
  }
  res.status(200).json(blogs)
}
