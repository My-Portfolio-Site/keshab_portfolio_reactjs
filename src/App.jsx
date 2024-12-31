/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react'
import { motion as m, useSpring, useScroll } from 'framer-motion'

import Header from './components/Header'
import Home from './components/Home'

const Experiance = lazy(() => import('./components/Experiance'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Others = lazy(() => import('./components/Others'))
const AboutMe = lazy(() => import('./components/AboutMe'))

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <div className='app'>
      <m.div
        id='scroll-indicator'
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: '#ff0088',
          zIndex: 100,
        }}
      />
      <Header />
      <Home />
      <Experiance />
      <Education />
      <Suspense fallback={<div></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Others />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutMe />
      </Suspense>
    </div>
  )
}

export default App
