/* eslint-disable react/prop-types */
import icon_skills from '../assets/icons/skills.svg'
import PageSection from './PageSection'
import { Reveal } from './Reveal'
import Card from './Card'

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
    <PageSection  title='Skills' icon_src={icon_skills} id='skills'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>

      {Object.entries(categorizedSkills).map(([category, skillsList]) => (
        <SkillCateroryCard
        key={category}
        category={category}
        skillsList={skillsList}
        />
      ))}
      </div>
    </PageSection>
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
    <Card className={`card px-4 py-3 pt-1 md:p-4 md:pt-2 w-full bg-surface ${cardClass}`}>
      <h3 className='text-md font-semibold text-textBase mb-3'>{category}</h3>
      <div className='flex flex-wrap gap-2'>
        {skillsList.map((skill) => (
          <Reveal direction='down'
            key={skill}
            className='bg-primary/10 text-primary text-sm px-3 py-1 rounded-full'
          >
            {skill}
          </Reveal>
        ))}
      </div>
    </Card>
  )
}


export default Skills
