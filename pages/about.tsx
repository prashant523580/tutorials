import Head from 'next/head'
import Card from '../components/Card/Card'
import Container from '../components/container/Container'
import PageLayout from '../components/PageLayout/PageLayout'
import styles from '../styles/About.module.css'
export default function About() {
  return (
    <PageLayout
      pageTitle='Blog | About'
      pageHeading="About - Us"
      description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      showCover={true}
    >
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
    </PageLayout>
  )
}
