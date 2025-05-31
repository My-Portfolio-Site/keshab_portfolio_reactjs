/* eslint-disable react/prop-types */
import icon_skills from '../assets/icons/skills.svg'
import FullScreenSection from './FullScreenSection'
import { Reveal } from './Reveal'

const categorizedSkills = {
  'RPA Technologies': [
    'UiPath',
    'Power Automate',
    'Orchestrator',
    'Document Understanding',
    'Web Automation',
    'Action Center',
    'ReFramework',
    'Production Support',
    'Cloud Flows',
    'Desktop Flows',
    'AI Builder',
    'Microsoft 365 Automation',
    'Scripting',
  ],
  'Web Development': [
    'ReactJS',
    'NextJs',
    'HTML',
    'CSS',
    'JavaScript',
    'NodeJs',
    'Django',
  ],
  'Programming Languages': ['Python', 'JavaScript', 'Java'],
  'Chatbot Frameworks': ['Rasa', 'Custom Actions', 'NLP'],
  'Databases & Tools': ['MongoDB', 'SQL', 'Docker', 'Nginx', 'Git', 'GitHub'],
}

const Skills = () => {
  return (
    <FullScreenSection className='gap-5 ' id='skills'>
      <h2 className='section-header'>
        <img
          loading='lazy'
          className='p-1'
          src={icon_skills}
          alt='skills'
          height='36px'
          width='36px'
        />
        Skills
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>

      {Object.entries(categorizedSkills).map(([category, skillsList]) => (
        <SkillCateroryCard
        key={category}
        category={category}
        skillsList={skillsList}
        />
      ))}
      </div>
    </FullScreenSection>
  )
}

const SkillCateroryCard = ({ category, skillsList }) => {
  const count = skillsList.length;
  let cardClass = ''
  if (count > 10) {
    cardClass = 'row-span-3'
  }
  else if (count >5) {
    cardClass = 'row-span-2'
  }
  return (
    <Reveal className={`card bg-surface p-6 w-full ${cardClass}`}>
      <h3 className='text-lg font-semibold text-textBase mb-3'>{category}</h3>
      <div className='flex flex-wrap gap-2'>
        {skillsList.map((skill) => (
          <span
            key={skill}
            className='bg-primary/10 text-primary text-sm px-3 py-1 rounded-full'
          >
            {skill}
          </span>
        ))}
      </div>
    </Reveal>
  )
}


export default Skills
