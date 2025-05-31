/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react'
import { motion as m, useSpring, useScroll } from 'framer-motion'

import Header from './components/Header'
import Introduction from './components/Introduction'

const Experiance = lazy(() => import('./components/Experiance'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(()=> import('./components/Skills'))
const CertificationAndCourses = lazy(() => import('./components/CertificationAndCourses'))
const AboutMe = lazy(() => import('./components/AboutMe'))
const Footer = lazy(() => import('./components/Footer'))


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
      <Introduction />
      <Experiance />
      <Education />
      <Suspense fallback={<div></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CertificationAndCourses />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
