import Head from 'next/head'
import Bio from '../components/Bio'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio 
          headshot="https://pbs.twimg.com/profile_images/1372200541800050691/BVROgIlO_400x400.jpg"
          name="Leo Miranda"
          tagline="Helping others to learn by doing!"
          role="Web Developer"
        />

        <ul className={styles.posts}>
          <li>
            <Post content="Hello new post" date='9/9/1999' />
          </li> 
          <li>
            <Post content="I'm working on Figma trying to design a new website that show all of my tweets!" date='9/9/1999' />
          </li> 
          <li>
            <Post content="Hello new post" date='2/26/2021' />
          </li> 
        </ul>

        <PostForm />
        
      </main>
    </div>
  )
}
