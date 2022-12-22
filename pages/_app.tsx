import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout >
   

    <ParallaxProvider>
  <Component {...pageProps} />
    </ParallaxProvider>
    
    </Layout>
  ) 
}
