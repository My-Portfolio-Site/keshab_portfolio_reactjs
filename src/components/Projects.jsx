import icon_projects from '../assets/icons/projects.svg'
import FullScreenSection from "./FullScreenSection"

const Projects = () => {
    const ProjectsList = [
        {
            title: "",
            description: "",
            image: "",
        }
    ]
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-green-100 to-purple-100" id="projects">
            <h2 className="text-[28px] bg-white font-extrabold flex flex-row ">
                <img loading="lazy" className='p-1' src={icon_projects} height="36px" width="36px" alt='projects' />
                Projects
            </h2>
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