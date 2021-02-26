import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useChallenge } from "../ChallengesContext"

interface CountDownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountDown: () => void
  resetCountDown: () => void
}

const CountDownContext = createContext({} as CountDownContextData)

let timeout: NodeJS.Timeout

export function CountDownProvider({ children }: PropsWithChildren<{}>) {
  const { startNewChallenge } = useChallenge()

  const initialTime = 0.05 * 60

  const [time, setTime] = useState<number>(initialTime)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [hasFinished, setHasFinished] = useState<boolean>(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => setTime(time => time - 1), 1000)
    } else if (isActive && time == 0) onFinishCycle()
  }, [isActive, time])

  function onFinishCycle() {
    setIsActive(false)
    setHasFinished(true)
    startNewChallenge()
  }

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(timeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(initialTime)
  }

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

export function useCountDown() {
  return useContext(CountDownContext)
}