import { useState, useEffect } from 'react';

import Home from './components/Home'
import Experiance from './components/Experiance'
import Header from './components/Header'
import Education from './components/Education';
import Projects from './components/Projects';
import Others from './components/Others';
import AboutMe from './components/AboutMe';

function App() {
  const [scrollV, setScrollV] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScrollV(scrollPosition)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    // console.log(scrollV);
  return (
    <div className='' >
      <Header />
      <Home />
      <Experiance />
      <Education />
      {/* <Projects /> */}
      <Others />
      <AboutMe />
    </div>
  )
}

export default App
