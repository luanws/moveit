import CompletedChallenges from '../components/CompletedChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Profile'
const styles = require('../styles/index.module.css')

export default function App() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
