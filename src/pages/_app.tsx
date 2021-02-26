import '../styles/global.css'
import { ChallengesProvider } from '../hooks/Challenges'
import { CountDownProvider } from '../hooks/CountDown'

export default function App({ Component, pageProps }: any) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>
  )
}
