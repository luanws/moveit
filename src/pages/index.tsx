import Head from 'next/head'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Profile'
const styles = require('../styles/index.module.css')

export default function App() {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>

          </div>
        </section>
      </div>
    </>
  )
}
