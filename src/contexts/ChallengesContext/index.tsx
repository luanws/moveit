import { createContext, PropsWithChildren, useContext, useState } from "react"
import challenges from '../../../challenges.json'
import Challenge from "../../models/challenge"

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge | null
  levelUp(): void
  startNewChallenge(): void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: PropsWithChildren<{}>) {
  const [level, setLevel] = useState<number>(1)
  const [currentExperience, setCurrentExperience] = useState<number>(0)
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)

  function levelUp() {
    setLevel(level => level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      levelUp,
      startNewChallenge,
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenge() {
  return useContext(ChallengesContext)
}