/* eslint-disable react/prop-types */
import icon_education from '../assets/icons/education.svg'
import logo_ltu from '../assets/logos/education/ltu_logo.png'
import logo_aec from '../assets/logos/education/aec_logo.png'

import PageSection from './PageSection'
import { Reveal } from './Reveal'
import Card from './Card'

const Education = () => {
  const educations = [
    {
      degree: 'M.Tech',
      date: 'Feb 2026 - Ongoing',
      field: 'Computer Science and Engineering',
      institution: 'Lumbini Technological University',
      location: 'Nepalgunj, Banke, Nepal',
      details: { CGPA: '', Percentage: '' },
      logo: logo_ltu,
      institution_link: 'https://ltu.edu.np/',
    },
    {
      degree: 'B.Tech',
      date: 'Sep 2016 - July 2021',
      field: 'Computer Science and Engineering',
      institution: 'Aditya Engineering College, JNTUK',
      location: 'Surampalem, Andhra Pradesh, India',
      details: { CGPA: '6.96', Percentage: '62.10%' },
      logo: logo_aec,
      institution_link: 'https://www.aec.edu.in/',
    },
  ]
  return (
    <PageSection title={'Education'} icon_src={icon_education} id='education'>
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        {educations.map((education, index) => {
          var CGPA = education.details.CGPA
          const Percentage = education.details.Percentage
          return (
            <EducationComponent
              key={index}
              CGPA={CGPA}
              Percentage={Percentage}
              {...education}
            />
          )
        })}
      </div>
    </PageSection>
  )
}

const EducationComponent = ({
  degree,
  date,
  field,
  institution,
  location,
  CGPA,
  Percentage,
  logo,
  institution_link,
}) => {
  return (
    <Card className='card p-5 md:p-8 bg-surface w-full max-w-xl'>
      <div className='flex flex-row place-content-between w-full'>
        <Reveal className='flex flex-col gap-2 items-stretch'>
          <span className='font-bold text-[18px] sm:text-[18px]'>{degree}</span>
          <span className='font-semibold text-xm sm:text-base'>{date}</span>
        </Reveal>
        {logo && (
        <a href={institution_link} target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt={`${institution} logo`}
            className='w-20 h-20 object-contain ml-3'
          />
          </a>
        )}
      </div>
      <Reveal className='mt-2'>
        <span className='font-bold text-[14px] sm:text-[18px] text-primary mt-2'>
          {field}
        </span>
      </Reveal>
      <Reveal className='flex flex-col sm:flex-row gap-1 text-sm sm:text-base'>
        <span className='font-semibold'>{institution}</span>
      </Reveal>
      <Reveal className='flex flex-col sm:flex-row gap-1 text-sm sm:text-base'>
        <span className=''>({location})</span>
      </Reveal>
      <Reveal className='flex flex-col sm:flex-row gap-1 text-gray-500 text-sm sm:text-base'>
        <span className=''>
          {CGPA ? CGPA + ' CGPA ' : ''}
          {Percentage ? '(' + Percentage + ')' : ''}
        </span>
      </Reveal>
    </Card>
  )
}
export default Education
