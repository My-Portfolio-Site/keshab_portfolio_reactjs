/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import icon_projects from '../assets/icons/projects.svg'
import icon_github from '../assets/icons/github.svg'
import img_uipath from '../assets/projectimages/uipath_logo.png'
import img_rasa from '../assets/projectimages/rasa_logo.png'

import FullScreenSection from './FullScreenSection'
import { SideReveal } from './SideReveal'

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
  ]
  return (
    <FullScreenSection
      className='gap-3 bg-gradient-to-b from-purple-100 to-indigo-100'
      id='projects'
    >
      <h2 className='text-[22px] sm:text-[28px] font-extrabold flex flex-row'>
        <img
          loading='lazy'
          className='p-1'
          src={icon_projects}
          height='36px'
          width='36px'
          alt='projects'
        />
        Projects
      </h2>
      <div className='flex overflow-x-auto gap-4 py-4 px-4 scrollbar-hide'>
        {projectsList.map((item) => (
          <Project key={item.title} {...item} />
        ))}
      </div>
    </FullScreenSection>
  )
}

const Project = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <SideReveal direction='right'>
      <div className='w-[300px] flex flex-col bg-slate-100 rounded-lg shadow-md overflow-hidden items-stretch h-full'>
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
      </div>
    </SideReveal>
  )
}
export default Projects
