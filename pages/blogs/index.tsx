import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css';
import Container from '../../components/container/Container';
export default function Blogs() {
const [blogsData,setBlogsData] = useState<any>([]);
    useEffect( () =>{
            fetch("/api/blog")
            .then((res) => {
               return res.json()
            }).then((data) =>{
                setBlogsData(data)
            })
    },[])
    useEffect(()=>{
        console.log(blogsData)
    },[blogsData])
  return (
    <Container>
      <Head>
        <title>blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
            {
               blogsData.length > 0 && blogsData.map((blog : any,ind : any) => {
                    return(

          <Link key={ind} href={`/blogs/${blog.slug}`} className={styles.card}>
            <h2>{blog.title} &rarr;</h2>
            <p>{blog.description}</p>
          </Link>
                    )
                })
            }
        </div>
      </main>

    </Container>
  )
}
