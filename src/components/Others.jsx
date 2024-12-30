
import icon_skills from '../assets/icons/skills.svg'
import icon_certificate from '../assets/icons/certificate.svg'

import FullScreenSection from "./FullScreenSection";
import { Reveal } from "./Reveal";

const Others = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-indigo-100 to-yellow-100">
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
                <Skills />
                <Certifications_Courses />
            </div>
        </FullScreenSection>
    )
}
const Skills = () => {
    return (
        <Reveal className="card basis-1/2" id="skills">
            <div className="text-[22px] sm:text-[25px] font-bold flex flex-row text-blue-500">
                <img loading="lazy" className='p-1' src={icon_skills} height="36px" width="36px" alt='skills' />
                Skills
            </div>
            <Reveal className="flex flex-col gap-1">
                <Reveal>
                    <span className="text-[14px] sm:text-[18px] font-bold">UiPath: </span>
                    <span className="text-[12px] sm:text-[16px]">Orchestrator | Document Underdtanding | Web Automation | Action Center | ReFramework | Production Support</span>
                </Reveal>
                <Reveal>
                    <span className="text-[14px] sm:text-[18px] font-bold">ReactJS: </span>
                    <span className="text-[12px] sm:text-[16px]">State | Router | Hooks | Context | Redux</span>
                </Reveal>
                <Reveal>
                    <span className="text-[14px] sm:text-[18px] font-bold">Chatbot: </span>
                    <span className="text-[12px] sm:text-[16px]">Rasa | Custom actions | NLP </span>
                </Reveal>

                <Reveal>
                    <span className="text-[14px] sm:text-[18px] font-bold">Python | JavaScript | Docker | Java | MongoDB | SQL | Docker | Nginx</span>
                </Reveal>
            </Reveal>
        </Reveal>
    )
}

const Certifications_Courses = () => {
    return (
        <Reveal className="card basis-1/2" id="certificate-courses">
            <div className="text-[22px] sm:text-[25px] font-bold flex flex-row text-yellow-500">
                <img loading="lazy" className='p-1' src={icon_certificate} height="36px" width="36px" alt='certificates' />
                Certifications/Courses
            </div>
            <Reveal>
                <ul className="flex flex-col gap-1 list-disc ml-5">
                    <li>
                        <Reveal>
                            <p className="text-[16px]">Rasa Developer Certification</p>
                            <span className="text-gray-600 text-[12px]">April 2023, Rasa Learning Center</span>
                        </Reveal>
                    </li>
                    <li>
                        <Reveal>
                            <p className="text-[16px]">UiPath RPA Developer Course</p>
                            <span className="text-gray-600 text-[12px]">March 2022, LearnJobs</span>
                        </Reveal>
                    </li>
                    <li>
                        <Reveal>
                            <p className="text-[16px]">Java, Python Full Stack</p>
                            <span className="text-gray-600 text-[12px]">April 2022, Kodnest</span>
                        </Reveal>
                    </li>
                    <li>
                        <Reveal>
                            <p className="text-[16px]">React Basics Course</p>
                            <span className="text-gray-600 text-[12px]">July 2023, Coursera(Meta)</span>
                        </Reveal>
                    </li>
                </ul>
            </Reveal>
        </Reveal>
    )
}

export default Others