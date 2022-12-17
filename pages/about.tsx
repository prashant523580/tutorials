import Head from 'next/head'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import Card from '../components/Card/Card'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cover}>

        <div className={styles.background}>

            <div className={styles.circle}></div>
        </div>
        <h1 className={styles.title}>
            About - Us
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
        </p>

        </div>
        <div className={styles.grid}>
          <div className={styles.flex_wrap}>

            <Card
                title='Who are we'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <Card
                title='Who are we?'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <Card
                title='why we do it?'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />

                </div>
        </div>
      </main>

    </div>
  )
}
