import { useChallenge } from "../../contexts/ChallengesContext"

const styles = require('./styles.module.css')

export default function CompletedChallenges() {
  const { challengesCompleted } = useChallenge()

  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}