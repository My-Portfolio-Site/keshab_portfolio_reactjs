

import FullScreenSection from "./FullScreenSection";
import { GiSkills } from 'react-icons/gi'
import { PiCertificate } from 'react-icons/pi'
import { Reveal } from "./Reveal";
const Others = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-purple-100 to-yellow-100">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <Skills />
                <Certifications_Courses />
            </div>
        </FullScreenSection>
    )
}
const Skills = () => {
    return (
        <Reveal className="card basis-1/2" id="skills">
            <div className="text-[25px] font-bold flex flex-row text-blue-500"><GiSkills className="p-1 text-[36px]" />Skills</div>
            <Reveal className="flex flex-col gap-1">
                <Reveal>
                    <span className="text-[18px] font-bold">ReactJS: </span>
                    <span className="text-[16px]">State | Router | Hooks | Context | Redux</span>
                </Reveal>
                <Reveal>
                    <span className="text-[18px] font-bold">Chatbot: </span>
                    <span className="text-[16px]">Rasa | Custom actions | NLP </span>
                </Reveal>
                <Reveal>
                    <span className="text-[18px] font-bold">UiPath: </span>
                    <span className="text-[16px]">Web Scraping | Selector | Excel | Email | Document Understanding</span>
                </Reveal>
                <Reveal>
                    <span className="text-[20px] font-bold">Python | JavaScript | Java | MongoDB | SQL | Docker | Nginx</span>
                </Reveal>
            </Reveal>
        </Reveal>
    )
}

const Certifications_Courses = () => {
    return (
        <Reveal className="card basis-1/2" id="certificate-courses">
            <div className="text-[25px] font-bold flex flex-row text-yellow-500"><PiCertificate className="p-1 text-[36px]" /> Certifications/Courses</div>
            <Reveal>
                <ul className="flex flex-col gap-1 list-disc ml-5">
                    <Reveal>
                        <p className="text-[16px]">Rasa Developer Certification</p>
                        <span className="text-gray-600 text-[12px]">April 2023, Rasa Learning Center</span>
                    </Reveal>
                    <Reveal>
                        <p className="text-[16px]">UiPath RPA Developer Course</p>
                        <span className="text-gray-600 text-[12px]">March 2022, LearnJobs</span>
                    </Reveal>
                    <Reveal>
                        <p className="text-[16px]">Java, Python Full Stack</p>
                        <span className="text-gray-600 text-[12px]">April 2022, Kodnest</span>
                    </Reveal>
                    <Reveal>
                        <p className="text-[16px]">React Basics Course</p>
                        <span className="text-gray-600 text-[12px]">July 2023, Coursera(Meta)</span>
                    </Reveal>
                </ul>
            </Reveal>
        </Reveal>
    )
}

export default Others