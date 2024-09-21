import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Paket from './components/Paket'
import Harga from './components/Harga'
import Testimoni from './components/Testimoni'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const paketRef = useRef(null);
  const hargaRef = useRef(null);
  const testimoniRef = useRef(null);
  const contactRef = useRef(null);

  const [activedMenu, setActivedMenu] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  function onScroll() {
    handleScrolling()
    const scrollPosition = document.documentElement.scrollTop;
    setScrollY(scrollPosition)
  }

  function handleNavigate(to) {
    switch (to) {
      case 'home':
        window.scroll({ behavior: 'smooth', top: 0 })
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: "smooth", });
        break;
      case 'paket':
        if (window.innerHeight > window.innerWidth) {
          paketRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          const currentOffsetTop = paketRef.current?.offsetTop ?? 0;
          window.scrollTo({
            top: currentOffsetTop - 64,
            behavior: 'smooth',
          });
        }
        break;
      case 'harga':
        if (window.innerHeight > window.innerWidth) {
          hargaRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          const currentOffsetTop = hargaRef.current?.offsetTop ?? 0;
          window.scrollTo({
            top: currentOffsetTop - 24,
            behavior: 'smooth',
          });
        }
        break;
      case 'testimoni':
        if (window.innerHeight > window.innerWidth) {
          testimoniRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          const currentOffsetTop = testimoniRef.current?.offsetTop ?? 0;
          window.scrollTo({
            top: currentOffsetTop - 64,
            behavior: 'smooth',
          });
        }
        break;
      case 'contact':
        if (window.innerHeight > window.innerWidth) {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          const currentOffsetTop = contactRef.current?.offsetTop ?? 0;
          window.scrollTo({
            top: currentOffsetTop - 64,
            behavior: 'smooth',
          });
        }
        break;
      default:
        console.log('tidak ada menu');
    }
  }

  function handleScrolling() {
    let section = 'home';
    if (window.scrollY >= (aboutRef.current?.offsetTop ?? 0) - 1) {
      section = 'about';
    }
    if (window.scrollY >= (paketRef.current?.offsetTop ?? 0) - 1) {
      section = 'paket';
    }
    if (window.scrollY >= (testimoniRef.current?.offsetTop ?? 0) - 1) {
      section = 'testimoni';
    }
    if (window.scrollY >= (contactRef.current?.offsetTop ?? 0) - 1) {
      section = 'contact';
    }
    console.log(section);

    setActivedMenu(section);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])
  return (
    <main className='overflow-hidden bg-f9'>
      <Navbar onNavigate={handleNavigate} actived={activedMenu} scrollY={scrollY} />
      <Jumbotron refrence={homeRef} />
      <About refrence={aboutRef} />
      <Paket refrence={paketRef} />
      <Harga refrence={hargaRef} />
      <Testimoni refrence={testimoniRef} />
      <Contact refrence={contactRef} />
      <Footer />
    </main>
  )
}

export default App
