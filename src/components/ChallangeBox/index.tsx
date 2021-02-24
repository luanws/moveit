import { useState } from "react"

const styles = require('./styles.module.css')

export function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState<boolean>(true)

  return (
    <div className={styles.container}>
      {hasActiveChallenge && (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
            >Falhei</button>
            <button
              type="button"
              className={styles.succeededButton}
            >Completei</button>
          </footer>
        </div>
      )}
      {!hasActiveChallenge && (
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