import icon_skills from '../assets/icons/skills.svg'
import icon_certificate from '../assets/icons/certificate.svg'

import FullScreenSection from './FullScreenSection'
import { Reveal } from './Reveal'

const certificationsOrCoursesList = [
  {
    title: 'Use Power Platform for Custom & Automated Solutions',
    date: 'September 2024',
    provider: 'Coursera(Microsoft)',
  },
  {
    title: 'Use AI Builder and Power Automate to Process Invoice Data',
    date: 'December 2024',
    provider: 'Coursera',
  },
  {
    title: 'Robotic Process AUtomation (RPA) Specialization',
    date: 'December 2024',
    provider: 'Coursera(UiPath)',
  },
  {
    title: 'Rasa Developer Certification',
    date: 'April 2023',
    provider: 'Rasa Learning Center',
  },
  {
    title: 'UiPath RPA Developer Course',
    date: 'March 2022',
    provider: 'LearnJobs',
  },
  {
    title: 'Java, Python Full Stack',
    date: 'April 2022',
    provider: 'Kodnest',
  },
  {
    title: 'React Basics Course',
    date: 'July 2023',
    provider: 'Coursera(Meta)',
  },
]

const Others = () => {
  return (
    <FullScreenSection className='gap-3 bg-gradient-to-b from-indigo-100 to-yellow-100'>
      <div className='flex flex-col md:flex-row gap-2 sm:gap-4'>
        <Skills />
        <Certifications_Courses />
      </div>
    </FullScreenSection>
  )
}
const Skills = () => {
  return (
    <Reveal className='card px-5 py-3 sm:px-10 basis-1/2' id='skills'>
      <div className='text-[22px] sm:text-[25px] font-bold flex flex-row text-blue-500'>
        <img
          loading='lazy'
          className='p-1'
          src={icon_skills}
          height='36px'
          width='36px'
          alt='skills'
        />
        Skills
      </div>
      <Reveal className='flex flex-col gap-1'>
        <Reveal>
          <span className='text-[14px] sm:text-[18px] font-bold'>UiPath: </span>
          <span className='text-[12px] sm:text-[16px]'>
            Orchestrator | Document Underdtanding | Web Automation | Action
            Center | ReFramework | Production Support
          </span>
        </Reveal>
        <Reveal>
          <span className='text-[14px] sm:text-[18px] font-bold'>Power Automate: </span>
          <span className='text-[12px] sm:text-[16px]'>
            Cloud Flows | Desktop Flows | Document Processing (AI Builder) | Web Automation | Power Virtual Agents | Scripting | Microsoft 365 Automation
          </span>
        </Reveal>
        <Reveal>
          <span className='text-[14px] sm:text-[18px] font-bold'>
            ReactJS/NextJs:{' '}
          </span>
          <span className='text-[12px] sm:text-[16px]'>
            State | Router | Hooks | Context | Redux
          </span>
        </Reveal>
        <Reveal>
          <span className='text-[14px] sm:text-[18px] font-bold'>
            Chatbot:{' '}
          </span>
          <span className='text-[12px] sm:text-[16px]'>
            Rasa | Custom actions | NLP{' '}
          </span>
        </Reveal>

        <Reveal>
          <span className='text-[14px] sm:text-[18px] font-bold'>
            Python | JavaScript | Docker | Java | MongoDB | SQL | Docker | Nginx
          </span>
        </Reveal>
      </Reveal>
    </Reveal>
  )
}

const Certifications_Courses = () => {
  return (
    <Reveal className='card px-5 py-3 sm:px-10 basis-1/2' id='certificate-courses'>
      <div className='text-[22px] sm:text-[25px] font-bold flex flex-row text-yellow-500'>
        <img
          loading='lazy'
          className='p-1'
          src={icon_certificate}
          height='36px'
          width='36px'
          alt='certificates'
        />
        Certifications/Courses
      </div>
      <Reveal>
        <ul className='flex flex-col gap-1 list-disc ml-5'>
          {certificationsOrCoursesList.map((item) => (
            <Reveal key={item.title}>
              <li>
                <p className='text-[16px]'>{item.title}</p>
                <span className='text-gray-600 text-[12px]'>
                  {item.date}, {item.provider}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </Reveal>
  )
}

export default Others
