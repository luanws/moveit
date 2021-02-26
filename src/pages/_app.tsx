import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountDownProvider } from '../contexts/CountDownContext'

export default function App({ Component, pageProps }: any) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>
  )
}
