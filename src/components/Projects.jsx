import icon_projects from '../assets/icons/projects.svg'
import FullScreenSection from "./FullScreenSection"

const Projects = () => {
    const projectsList = [
        {
            title: "",
            description: "",
            technologies: "",
            repo: "",
            link: "",
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

const Project = () => {
    return (
       <div>

       </div>
    )
}
export default Projects