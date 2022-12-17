import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Navbar/>
    <ParallaxProvider>

  <Component {...pageProps} />
    </ParallaxProvider>
    <Footer/>
    </>
  ) 
}
