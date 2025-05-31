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

const CertificationAndCourses = () => {
  return (
    <FullScreenSection className='gap-5 ' id='CertificationAndCourses'>
      <h2 className='section-header'>
        <img
          loading='lazy'
          className='p-1'
          src={icon_certificate}
          alt='certificates'
          height="36px" width="36px"
        />
        Certifications & Courses
      </h2>
      <Reveal className='w-full' id='certificate-courses'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {certificationsOrCoursesList.map((item) => (
            <Reveal key={item.title}>
              <div className='card bg-surface rounded-xl shadow-lg p-4 flex flex-col h-full'>
                {' '}
                {/* Added h-full for consistent card height in grid */}
                <h4 className='text-md font-semibold text-primary mb-1'>
                  {item.title}
                </h4>
                <p className='text-sm text-textMuted mb-1'>{item.provider}</p>
                <p className='text-xs text-textMuted mb-2'>{item.date}</p>
                {/* Placeholder for link if data structure includes it in the future
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-sm text-secondary hover:underline"
            >
              View Credential
            </a>
          )}
          */}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </FullScreenSection>
  )
}

export default CertificationAndCourses
