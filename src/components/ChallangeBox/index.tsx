import { useState } from "react"
import { useChallenge } from "../../contexts/ChallengesContext"

const styles = require('./styles.module.css')

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useChallenge()

  return (
    <div className={styles.container}>
      {activeChallenge && (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={resetChallenge}
            >Falhei</button>
            <button
              type="button"
              className={styles.succeededButton}
            >Completei</button>
          </footer>
        </div>
      )}
      {!activeChallenge && (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <div>
            <img src="icons/level-up.svg" alt="Level Up" />
            <p>
              Avance de level completando os desafios.
          </p>
          </div>
        </div>
      )}
    </div>
  )
}