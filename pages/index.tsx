import Head from 'next/head';
import Container from '../components/container/Container';
import styles from '../styles/Home.module.css';


export default function Home() {

  return (
    <Container>
      <Head>
        <title>Blogs | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{}</h1>
        <div className={styles.grid}>
        </div>
      </main> 
    </Container>
  )
}
