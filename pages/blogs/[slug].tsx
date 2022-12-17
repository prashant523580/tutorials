      
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Slug() {
    const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{router.query.slug}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {router.query.slug}
        </h1>

      

        <div className={styles.grid}>

        </div>
      </main>

      
    </div>
  )
}
