import { createContext, PropsWithChildren, useContext, useState } from "react"

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  levelUp(): void
  startNewChallenge(): void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: PropsWithChildren<{}>) {
  const [level, setLevel] = useState<number>(1)
  const [currentExperience, setCurrentExperience] = useState<number>(0)
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0)

  function levelUp() {
    setLevel(level => level + 1)
  }

  function startNewChallenge() {
    console.log('Novo desafio')
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenge() {
  return useContext(ChallengesContext)
}