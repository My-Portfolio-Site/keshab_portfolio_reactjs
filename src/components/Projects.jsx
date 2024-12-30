import icon_projects from '../assets/icons/projects.svg'

import FullScreenSection from "./FullScreenSection"
import { Reveal } from './Reveal'

const Projects = () => {
    const projectsList = [
        {
            title: "Winning streak for Tour de France prticipants",
            description: "Given an input dictionary containing a year and a name, please calculate the number of victories of each winner and print all the names of the winners with the number of corresponding victories.",
            technologies: "UiPath",
            repo: "https://github.com/RPA-UiPath-Projects/Winning-streak-for-Tour-De-france-prticipants",
            site: "https://github.com/RPA-UiPath-Projects/Winning-streak-for-Tour-De-france-prticipants",
            image: "",
        }
    ]
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-purple-100 to-indigo-100" id="projects">
            <h2 className="text-[22px] sm:text-[28px] font-extrabold flex flex-row">
                <img loading="lazy" className='p-1' src={icon_projects} height="36px" width="36px" alt='projects' />
                Projects
            </h2>
            {projectsList.map(item => <Project key={item.title} {...item} />)}
        </FullScreenSection>
    )
}

const Project = ({title, description, technologies, repo, site, image}) => {
    return (
       <Reveal>
        
       </Reveal>
    )
}
export default Projects