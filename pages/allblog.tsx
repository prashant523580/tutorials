import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Blog.module.css';
import path from 'path';
import { promises as fs } from 'fs';
import { GetStaticProps } from 'next/types';
import PageLayout from '../components/PageLayout/PageLayout';
// export async function getServerSideProps(){
//   let dev = process.env.NODE_ENV !== "production";
//   let {DEV_URL,PROD_URL} = process.env
//   let data = await fetch(`${dev ? DEV_URL : PROD_URL}/api/blog`);
//   let blogs = await data.json();

//   return{
//     props:{
//       blogs
//     }
//   }
// }
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let jsonDirectory = path.join(process.cwd(), "json/tutorials");
  let data: any = await fs.readdir(jsonDirectory);
  let blogs: any = [];
  let blog: any;
  for (var i = 0; i < data.length; i++) {
    blog = await fs.readFile(jsonDirectory + "/" + data[i], "utf-8");
    blogs.push(JSON.parse(blog));
  }
  // blogs =  JSON.parse(blogs);
  return {
    props: {
      blogs
    }
  }

}
export default function Blogs({ blogs }: any) {
  const [blogsData, setBlogData] = useState<any>(blogs);
  const [numb, setNumb] = useState(1);
  const fetchData = async () => {
    setNumb(numb + 1)
    // setTimeout( async () => {
    let res = await fetch(`/api/blog/?count=${numb}`);
    let data = await res.json();
    console.log(data)
    console.log(numb)
    // this.setState({
    //   items: items.concat(Array.from({ length: 20 }))
    // });
    setBlogData(data);
    // }, 1500);
  }

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {

  //     window.addEventListener('scroll', function (event: any) {
  //       var element = event.target;
  //       // console.log(element)
  //       console.log(element.scrollHeight === element.scrollTop + element.clientHeight)
  //       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //        loadMoreData()
  //     }
  //     });
  //   }
  // }, [blogsData,numb]);
  const loadMoreData = () => {
    if(numb < blogsData.length){
      setNumb(numb + 2)
    }
    // console.log(numb,blogsData.length)
  }
  return (
    <>
    <PageLayout
    pageTitle='Blogs | Blogs'
    showCover={false}
    pageHeading="Blog"
    description='latest blogs'
    >
      {
            blogsData.length > 0 && blogsData.slice(0,numb).map((blog: any, ind: any) => {
              return (
                <div className={styles.card} key={ind}>

                <Link  href={`blogs/${blog.slug}`} >
                  <h2>{blog.title} &rarr;</h2>
                  <p>{blog.description.substr(0,96)}...</p>
                </Link>
                </div>
              )
            })
          }
          
          
          {
            numb <  blogsData.length ? 
            <button
            style={{
              width:  "150px",
              margin:".3em auto",
              fontSize:"1.1em",
              padding: ".6em .9em",
              border:"0"
            }}
             onClick={loadMoreData}>load more </button> : <p className='p'>Yay! You have seen it all</p>
          }
          <style jsx>
            {`
            .p{
              padding: 10px 12px;
              text-align: center;
              margin: 1.3em 0;
            }
            `}
          </style>
    </PageLayout>
    </>
  )
}
