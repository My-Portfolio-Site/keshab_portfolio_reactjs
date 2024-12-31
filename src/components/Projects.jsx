/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import icon_projects from '../assets/icons/projects.svg'
import icon_github from '../assets/icons/github.svg'
import img_uipath from '../assets/projectimages/uipath_logo.png'
import img_rasa from '../assets/projectimages/rasa_logo.png'

import FullScreenSection from './FullScreenSection'
import { Reveal } from './Reveal'
import Button from '../components/ui/button'

import { useRef, useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const projectsList = [
    {
      title: 'Winning streak for Tour de France prticipants',
      description:
        'Given an input dictionary containing a year and a name, please calculate the number of victories of each winner and print all the names of the winners with the number of corresponding victories.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Winning-streak-for-Tour-De-france-prticipants',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Chatbot for company Website',
      description:
        'Chatbot that can interact with the user and provide information about the company and its services. The chatbot is built using Rasa Chatbot Framework and deployed on the company website.',
      technologies: [
        'Rasa',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'AWS EC2',
        'Docker',
        'Nginx',
      ],
      githubUrl: 'https://github.com/My-Rasa-Chatbots/mChat',
      liveUrl: '',
      imageUrl: img_rasa,
    },
    {
      title: 'Winning streak for Tour de France prticipants',
      description:
        'Given an input dictionary containing a year and a name, please calculate the number of victories of each winner and print all the names of the winners with the number of corresponding victories.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Winning-streak-for-Tour-De-france-prticipants',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Chatbot for company Website',
      description:
        'Chatbot that can interact with the user and provide information about the company and its services. The chatbot is built using Rasa Chatbot Framework and deployed on the company website.',
      technologies: [
        'Rasa',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'AWS EC2',
        'Docker',
        'Nginx',
      ],
      githubUrl: 'https://github.com/My-Rasa-Chatbots/mChat',
      liveUrl: '',
      imageUrl: img_rasa,
    },
    {
      title: 'Winning streak for Tour de France prticipants',
      description:
        'Given an input dictionary containing a year and a name, please calculate the number of victories of each winner and print all the names of the winners with the number of corresponding victories.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Winning-streak-for-Tour-De-france-prticipants',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Chatbot for company Website',
      description:
        'Chatbot that can interact with the user and provide information about the company and its services. The chatbot is built using Rasa Chatbot Framework and deployed on the company website.',
      technologies: [
        'Rasa',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'AWS EC2',
        'Docker',
        'Nginx',
      ],
      githubUrl: 'https://github.com/My-Rasa-Chatbots/mChat',
      liveUrl: '',
      imageUrl: img_rasa,
    },
  ]
  return (
    <FullScreenSection
      className='gap-3 bg-gradient-to-b from-purple-100 to-indigo-100'
      id='projects'
    >
      <h2 className='text-[22px] sm:text-[28px] font-extrabold flex flex-row'>
        <m.img
          loading='lazy'
          className='p-1'
          src={icon_projects}
          height='36px'
          width='36px'
          alt='projects'
        />
        Projects
      </h2>
      <div className='container mx-auto'>
        <ProjectScroll projectList={projectsList} />
      </div>
    </FullScreenSection>
  )
}

// Scroll for Project cards
const ProjectScroll = ({ projectList }) => {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const { current } = scrollRef
    if (current) {
      current.addEventListener('scroll', handleScroll)
      return () => current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='relative'>
      {showLeftArrow && (
        <Button
          variant='outline'
          size='icon'
          className='bg-white absolute left-0 top-1/2 -translate-y-1/2 z-10'
          onClick={() => scroll('left')}
          aria-label='Scroll left'
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
      )}
      <div
        ref={scrollRef}
        className='flex overflow-x-auto gap-4 py-4 px-4 scrollbar-hide'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {showRightArrow && (
        <Button
          variant='outline'
          size='icon'
          className='bg-white absolute right-0 top-1/2 -translate-y-1/2 z-10'
          onClick={() => scroll('right')}
          aria-label='Scroll right'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      )}
    </div>
  )
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <Reveal direction='right'>
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='w-[300px] flex flex-col bg-slate-100 rounded-lg shadow-md overflow-hidden items-stretch h-full'
      >
        <div className='relative h-40'>
          {imageUrl && (
            <img src={imageUrl} className='w-auto' alt={title} loading='lazy' />
          )}
        </div>
        <div className='p-4 flex flex-col flex-grow'>
          <h3 className='text-lg font-semibold text-gray-800 '>{title}</h3>
          <p className='text-sm text-gray-600 h-16 overflow-hidden mt-1'>
            {description}
          </p>
          <div className='flex flex-wrap gap-2 mt-3'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='px-2 py-1 text-xs font-medium bg-white text-gray-800  rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className='p-4 flex justify-between'>
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            <img
              loading='lazy'
              src={icon_github}
              width='25px'
              height='25px'
              className='cursor-pointer pr-1'
              alt='Github'
            />
            Source Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
            >
              <link className='mr-2 h-4 w-4' />
              Live Demo
            </a>
          )}
        </div>
      </m.div>
    </Reveal>
  )
}
export default Projects
