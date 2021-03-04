import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { useCountDown } from '../hooks/CountDown'
const styles = require('../styles/index.module.css')

export default function App() {
  const { minutes, seconds, isActive } = useCountDown()

  const minutesTwoDigits = String(minutes).padStart(2, '0')
  const secondsTwoDigits = String(seconds).padStart(2, '0')
  const displayTime = `${minutesTwoDigits}:${secondsTwoDigits} `

  return (
    <>
      <Head>
        <title>{isActive ? displayTime : ''}move.it</title>
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
            <ChallengeBox />
          </div>
        </section>
      </div>
    </>
  )
}
