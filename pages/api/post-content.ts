// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs , existsSync} from 'fs';
import path from 'path';
type Data = {
  success: string
}

export default async function postContent(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let postDirectory = path.join(process.cwd(),"post-content");
  if(req.method === "POST"){
      if( await existsSync(postDirectory)){
            let bodyData: any = JSON.stringify(req.body);
            // let dir = await fs.readdir(postDirectory);
            
         await fs.writeFile(postDirectory + `/${req.body.fullname}.json` , bodyData ,"utf-8");
           res.status(200).json({
                success: "successfully created data."
              })
    }else{
            await fs.mkdir(postDirectory + "/post-content")
        }
    }
}
