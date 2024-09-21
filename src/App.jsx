import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Paket from './components/Paket'
import Harga from './components/Harga'
import Testimoni from './components/Testimoni'
import Contact from './components/Contact'

function App() {
  const [activedMenu, setActivedMenu] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  function onScroll() {
    const scrollPosition = document.documentElement.scrollTop;
    setScrollY(scrollPosition)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])
  return (
    <main className='overflow-hidden'>
      <Navbar actived={activedMenu} scrollY={scrollY} />
      <Jumbotron />
      <About />
      <Paket />
      <Harga />
      <Testimoni />
      <Contact />
    </main>
  )
}

export default App
