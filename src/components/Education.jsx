import icon_education from '../assets/icons/education.svg'

import PageSection from './PageSection'
import { Reveal } from './Reveal'
import Card from './Card'

const Education = () => {
  return (
    <PageSection title={'Education'} icon_src={icon_education} id='education'>
      <Card className='card p-5 md:p-8 bg-surface w-full max-w-2xl'>
        <Reveal className='flex flex-col sm:flex-row gap-2 sm:gap-10 items-stretch'>
          <span className='font-bold text-[18px] sm:text-[18px]'>B.Tech</span>
        </Reveal>
        <Reveal>
          <span className='font-semibold text-xm sm:text-base'>
            Sep 2016 - July 2021
          </span>
        </Reveal>
        <Reveal className='mt-2'>
          <span className='font-bold text-[14px] sm:text-[18px] text-primary mt-2'>
            Computer Science and Engineering
          </span>
        </Reveal>
        <Reveal className='flex flex-col sm:flex-row gap-1 text-sm sm:text-base'>
          <span className='font-semibold'>
            Aditya Engineering College, JNTUK
          </span>
        </Reveal>
        <Reveal className='flex flex-col sm:flex-row gap-1 text-sm sm:text-base'>
          <span className=''>(Surampalem, Andhra Pradesh, India)</span>
        </Reveal>
      </Card>
    </PageSection>
  )
}

export default Education
