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
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
