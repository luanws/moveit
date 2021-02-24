import { useEffect, useState } from "react"
const styles = require('./styles.module.css')

let timeout: NodeJS.Timeout

export default function CountDown() {
  const initialTime = 0.05 * 60

  const [time, setTime] = useState<number>(initialTime)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [hasFinished, setHasFinished] = useState<boolean>(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => setTime(time => time - 1), 1000)
    } else if (isActive && time == 0) {
      setIsActive(false)
      setHasFinished(true)
    }
  }, [isActive, time])

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(timeout)
    setIsActive(false)
    setTime(initialTime)
  }

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished && (
        <button
          disabled
          className={styles.countDownButton}
        >
          Ciclo encerrado
        </button>
      )}
      {!hasFinished && isActive && (
        <button
          type="button"
          className={[styles.countDownButton, styles.countDownButtonActive].join(' ')}
          onClick={resetCountDown}
        >
          Abandonar ciclo
        </button>
      )}
      {!hasFinished && !isActive && (
        <button
          type="button"
          className={styles.countDownButton}
          onClick={startCountDown}
        >
          Iniciar um ciclo
        </button>
      )}
    </div>
  )
}