/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import icon_projects from '../assets/icons/projects.svg'
import icon_github from '../assets/icons/github.svg'
import img_uipath from '../assets/projectimages/uipath_logo.png'
import img_rasa from '../assets/projectimages/rasa_logo.png'
import img_BTechProject from '../assets/projectimages/BTech_Project.png'

import PageSection from './PageSection'
import { Reveal } from './Reveal'

import { useState } from 'react'
import { motion as m } from 'framer-motion'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
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
      title: 'RobotICT_RPA-Challenge',
      description:
        'Three different UiPath bots for the RobotICT challenge. 1. Trip Planner, 2. Recipe Ideas, 3. Expenses Counter',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/RobotICT_RPA-Challenge',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Fill-the-RPA-Challenge-website-input-fields',
      description:
        'The goal of this challenge is to create a workflow that will input data from a spreadsheet into the form fields on the screen. Open the URL: www.rpachallenge.com.Download the excel sheet And follow the instructions: The goal of this challenge is to create a workflow that will input data from a spreadsheet into the form fields on the screen. Beware! The fields will change position on the screen after every submission throughout 10 rounds thus the workflow must correctly identify where each spreadsheet record must be typed every time. The actual countdown of the challenge will begin once you click the Start button until then you may submit the form as many times as you wish without receiving penalties.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Fill-the-RPA-Challenge-website-input-fields',
      liveUrl: '',
      imageUrl: img_uipath,
    },   
    {
      title: 'Find-weather-of-given-city',
      description:
        'Create a robot which finds the weather of a specific city using Google. Create a robot which finds the weather of a specific city using Google. The city of interest is introduced by user.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Find-weather-of-given-city',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Read-email-Web-scraping-based-on-subject-Send-mail-of-scrapped-data',
      description:
        'Create a workkflow which will first read the email, extract the subject line of that email and search for that keyword on ecommerce website and then extract the results and store it in csv. Also send this csv on the same mail id.',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Read-email-Web-scraping-based-on-subject-Send-mail-of-scrapped-data',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Read-PDF-Forms-and-extract-data',
      description:
        'An Organisation in US have received many registration form in pdf format. Help John to extract information (GivenName,FamilyName,Postcode and City) ONLY from all PDF files and store it in EmployeeDetails.csv',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Read-PDF-Forms-and-extract-data',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Send-PDF-attachments-in-mail',
      description:
        'Create a workflow that:Reads the 6th page of "Session 11 - exercise 2 - UiPathOrchestratorAzureInstallationGuide2016.1" (in the attachment)Reads the 2nd page of "Session 11 - exercise 2 - ScannedDoc" (in the attachment)Sends an email with both documents attached and with the text from point 1 and text from point 2 as Body Done',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Send-PDF-attachments-in-mail',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'Shipping-Load-for-each-city',
      description:
        'Calculate the combined weight of the packages sent to one city (Data Manipulation)Consider the database of a shipping company containing people and the packages they are sending to certain cities across the world, along with their weight. The database is a Dictionary with the key of String type (the names of the persons) and the values of Dictionary (String/Cities, Double/Weight) type.Please calculate the overall weight for one city destination. Once this is done, the user should be presented with an input dialog containing the distinct list of cities present in the input data dictionary. If the user chooses no value from the input dialog, print "Nothing chosen by the user"; otherwise you can print "The combined weight of the packages sent to <ChosenCity> is x.xx" (use double digits).Note: For input data, download the workflow below, which already has the Dictionary defined.New Dictionary(Of String, Dictionary(Of String, Double)) From {{"John C", New Dictionary(Of String, Double) From {{"Madrid",2.1},{"Paris",1.1}} },{"Sarah C", New Dictionary(Of String, Double) From {{"New York",2.1},{"Paris",3.3},{"Berlin", 0.8}} },{"Kyle R", New Dictionary(Of String, Double) From {{"San Francisco",2.8},{"New York",1.1}} },{"Johnny B", New Dictionary(Of String, Double) From {{"New York",2.1},{"Paris",3.3}, {"Cairo",1.3}, {"Chicago",1.9}} }}',
      technologies: ['UiPath'],
      githubUrl:
        'https://github.com/RPA-UiPath-Projects/Shipping-Load-for-each-city',
      liveUrl: '',
      imageUrl: img_uipath,
    },
    {
      title: 'BTech Project: Disease Prediction and Doctor appointment management system',
      description:
        'Django based website for Disease Prediction Sytem Using Machine Learning Naive Bayes Classifier And Appointment Booking System. Interface for both Doctors and Patients. Patients can locate doctors based on location and specialization.',
      technologies: [
        'Python',
        'sqlite',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      githubUrl: 'https://github.com/B-Tech-Project/eg-doc',
      liveUrl: '',
      imageUrl: img_BTechProject,
    },
  ]

  // Show only first 6 projects if not showAll
  const projectsToShow = showAll ? projectsList : projectsList.slice(0, 4)

  return (
    <PageSection
      title={'Projects'}
      icon_src={icon_projects}
      id='projects'
    >
      <div className='container mx-auto'>
        {/* Replaced ProjectScroll with a direct grid implementation */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 py-3'>
          {projectsToShow.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {projectsList.length > 4 && (
          <div className='flex justify-center mt-4'>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className='px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary-dark transition-colors duration-200'
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </PageSection>
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
    <Reveal direction='down'>
      <m.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        // className='w-[300px] flex flex-col card rounded-lg shadow-md overflow-hidden items-stretch h-full'
        className='w-full flex flex-col bg-surface rounded-xl shadow-lg overflow-hidden items-stretch h-full'
      >
        <div className='relative'>
          {imageUrl && (
            <img src={imageUrl} className='object-cover w-full h-25' alt={title} loading='lazy'/>
          )}
        </div>
        <div className='py-2 px-3 flex flex-col flex-grow'>
          <h3 className='text-md font-semibold text-primary '>{title}</h3>
          <p className='text-[11px] text-gray-600 h-16 overflow-hidden mt-1'>
            {description}
          </p>
          <div className='flex flex-wrap gap-1 mt-2'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='px-2 py-1 text-[10px] font-medium bg-primary/10 text-primary rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className='p-2 flex justify-between'>
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            <img
              loading='lazy'
              src={icon_github}
              width='25px'
              height='25px'
              className='cursor-pointer pr-1'
              alt='Github'
            />
            Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-1 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
            >
              <link className='mr-2 h-4 w-4'>
              Live Demo
              </link>
            </a>
          )}
        </div>
      </m.div>
    </Reveal>
  )
}
export default Projects
