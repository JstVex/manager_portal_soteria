import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}