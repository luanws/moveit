import { useChallenge } from "../../hooks/Challenges"
const styles = require('./styles.module.css')

interface Props {
  close: () => void
}

export function LevelUpModal({ close }: Props) {
  const { level } = useChallenge()

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={close}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  )
}