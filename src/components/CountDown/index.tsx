import { useCountDown } from "../../contexts/CountDownContext"
const styles = require('./styles.module.css')

export default function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useCountDown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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