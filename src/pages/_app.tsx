import { ChallengesProvider } from '../hooks/Challenges'
import { CountDownProvider } from '../hooks/CountDown'
import '../styles/global.css'

export default function App({ Component, pageProps }: any) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>
  )
}
