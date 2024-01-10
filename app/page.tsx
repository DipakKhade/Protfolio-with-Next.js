import DiscordButton from '@/components/Discord'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Projects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
  <main>
    
    <DiscordButton/>

    <Skills/>
    <Work/>

    <Footer/>
  </main>
  )
}
