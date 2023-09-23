import FullScreenSection from "./FullScreenSection"
import {PiProjectorScreenChart} from 'react-icons/pi'

const Projects = () => {
    const ProjectsList = [
        {
            title: "",
            description: "",
            image: "",
        }
    ]
    return (
        <FullScreenSection id="projects">
            <h2 className="text-[28px] bg-white font-extrabold flex flex-row text-green-600"><PiProjectorScreenChart className="p-1 text-[36px]"/>Projects</h2>
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