import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { ChallengeBox } from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { ChallengesProvider, useChallenge } from '../hooks/Challenges'
import { CountDownProvider, useCountDown } from '../hooks/CountDown'
const styles = require('../styles/index.module.css')

interface Props {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function App(props: Props) {
  const { minutes, seconds, isActive } = useCountDown()

  const { level, currentExperience, challengesCompleted } = props
  const minutesTwoDigits = String(minutes).padStart(2, '0')
  const secondsTwoDigits = String(seconds).padStart(2, '0')
  const displayTime = `${minutesTwoDigits}:${secondsTwoDigits} `

  return (
    <>
      <ChallengesProvider
        level={level}
        challengesCompleted={challengesCompleted}
        currentExperience={currentExperience}
      >
        <CountDownProvider>
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
        </CountDownProvider>
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function (context) {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  return {
    props: {
      level: JSON.parse(level || '1'),
      challengesCompleted: JSON.parse(challengesCompleted || '0'),
      currentExperience: JSON.parse(currentExperience || '0')
    }
  }
}
