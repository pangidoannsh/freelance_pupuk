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
import { Icon } from '@iconify/react/dist/iconify.js'

import "primereact/resources/themes/lara-light-cyan/theme.css";

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
    const scrollToSection = (ref) => {
      const isMobile = window.innerHeight > window.innerWidth;
      if (isMobile) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        const currentOffsetTop = ref.current?.offsetTop ?? 0;
        window.scrollTo({
          top: currentOffsetTop,
          behavior: 'smooth',
        });
      }
    };

    switch (to) {
      case 'home':
        window.scroll({ behavior: 'smooth', top: 0 });
        break;
      case 'about':
        scrollToSection(aboutRef);
        break;
      case 'paket':
        scrollToSection(paketRef);
        break;
      case 'harga':
        scrollToSection(hargaRef);
        break;
      case 'testimoni':
        scrollToSection(testimoniRef);
        break;
      case 'contact':
        scrollToSection(contactRef);
        break;
      default:
        console.log('tidak ada menu');
    }
  }

  function handleScrolling() {
    const sections = [
      { name: 'about', ref: aboutRef },
      { name: 'paket', ref: paketRef },
      { name: 'testimoni', ref: testimoniRef },
      { name: 'contact', ref: contactRef },
    ];

    let activeSection = 'home';

    for (const section of sections) {
      const offsetTop = section.ref.current?.offsetTop ?? 0;
      if (window.scrollY >= offsetTop - 1) {
        activeSection = section.name;
      }
    }

    setActivedMenu(activeSection);
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
      <About refrence={aboutRef} onNavigate={handleNavigate} />
      <Paket refrence={paketRef} />
      <Harga refrence={hargaRef} />
      <Testimoni refrence={testimoniRef} />
      <Contact refrence={contactRef} />
      <Footer onNavigate={handleNavigate} />
      <button onClick={() => window.scroll({ behavior: 'smooth', top: 0 })}
        className={`bg-sky-500 shadow p-4 rounded hover:bg-sky-700 focus:ring focus:ring-sky-200 fixed bottom-4 right-4 duration-300 z-40 ${scrollY > 100 ? "opacity-100" : "opacity-0"}`}>
        <Icon icon="mingcute:arrow-up-fill" className='text-2xl text-white' />
      </button>
    </main>
  )
}

export default App
