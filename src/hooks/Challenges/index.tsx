import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import challenges from '../../../challenges.json'
import Challenge from "../../models/challenge"
import usePersistedState from "../PersistedState"

interface ChallengesContextData {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  challengesCompleted: number
  activeChallenge: Challenge | null
  levelUp(): void
  startNewChallenge(): void
  resetChallenge(): void
  completeChallenge(): void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: PropsWithChildren<{}>) {
  const [level, setLevel] = usePersistedState<number>('level', 1)
  const [currentExperience, setCurrentExperience] = usePersistedState<number>('currentExperience', 0)
  const [challengesCompleted, setChallengesCompleted] = usePersistedState<number>('challengesCompleted', 0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level => level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)

    new Audio('./notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp`,
        icon: 'favicon.png',
        silent: true
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) return
    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount
    while (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      experienceToNextLevel,
      activeChallenge,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenge() {
  return useContext(ChallengesContext)
}