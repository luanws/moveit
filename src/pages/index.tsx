import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { ChallengeBox } from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { useChallenge } from '../hooks/Challenges'
import { useCountDown } from '../hooks/CountDown'
const styles = require('../styles/index.module.css')

interface Props {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function App(props: Props) {
  const { setInitialLevelData } = useChallenge()
  const { minutes, seconds, isActive } = useCountDown()

  const { level, currentExperience, challengesCompleted } = props
  const minutesTwoDigits = String(minutes).padStart(2, '0')
  const secondsTwoDigits = String(seconds).padStart(2, '0')
  const displayTime = `${minutesTwoDigits}:${secondsTwoDigits} `

  useEffect(() => {
    setInitialLevelData(level, currentExperience, challengesCompleted)
  }, [level, currentExperience, challengesCompleted])

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

export const getServerSideProps: GetServerSideProps<Props> = async function (context) {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  return {
    props: {
      level: JSON.parse(level),
      challengesCompleted: JSON.parse(challengesCompleted),
      currentExperience: JSON.parse(currentExperience)
    }
  }
}
