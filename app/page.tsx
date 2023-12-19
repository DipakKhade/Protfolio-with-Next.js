import Image from 'next/image'
import Work from './components/Work'
import Navbar from './components/Navbar'
import KonwnThings from './components/KnownThings'
import Footer from './components/Footer'

export default function Home() {
  return (
  <>
   <Navbar/>

 
  <KonwnThings/>
  <Work/>
  <Footer/>
  </>
  )
}
