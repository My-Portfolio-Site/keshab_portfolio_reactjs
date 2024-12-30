import { lazy, Suspense } from 'react';

import Header from './components/Header'
import Home from './components/Home'

const Experiance = lazy(() => import('./components/Experiance'));
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Others = lazy(() => import('./components/Others'))
const AboutMe = lazy(() => import('./components/AboutMe'))


function App() {
  return (
    <div className='app' >
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
