import { useState, useEffect, lazy, Suspense } from 'react';

import Header from './components/Header'
import Home from './components/Home'

const Experiance = lazy(() => import('./components/Experiance'));
const Education = lazy(() => import('./components/Education'))
const Others = lazy(() => import('./components/Others'))
const AboutMe = lazy(() => import('./components/AboutMe'))


function App() {
  // const [scrollV, setScrollV] = useState(0)
  //   useEffect(() => {
  //       const handleScroll = () => {
  //           const scrollPosition = window.scrollY
  //           setScrollV(scrollPosition)
  //       }
  //       window.addEventListener('scroll', handleScroll)
  //       return () => {
  //           window.removeEventListener('scroll', handleScroll)
  //       }
  //   },[])
  // console.log(scrollV);
  return (
    <div className='app' >
      <Header />
      <Home />
      <Experiance />
      <Education />
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
