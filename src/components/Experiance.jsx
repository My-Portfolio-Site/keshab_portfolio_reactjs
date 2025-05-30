/* eslint-disable react/prop-types */

import icon_experiance from '../assets/icons/experiance.svg'

import FullScreenSection from "./FullScreenSection";
import { Reveal } from "./Reveal";

const Experiance = () => {
    const experiances = [
        {
            company: "Marlabs Pvt Ltd",
            location: "Banglore, India",
            positions: [
                {
                    designation: "Senior Software Engineer",
                    date: "Jan 2025 - Present",
                    details: [
                        "Worked on Migration of UiPath bots to Power Automate by utilizing Power Automate Desktop Flows and Cloud Flows.",
                        "Performed testing of the migrated bots in Dev environment as well as in Staging environment.",
                        "For bots migration developed user stories, test cases and UAT Manual.",
                        "Utilized Microsoft AI Builder service to automate Invoice data extraction with pre-trained and fine-tuned models.",
                        "Provided ongoing monitoring, support and maintenance for UiPath robots and Power Automate robots, addressing user inquiries and troubleshooting issues promptly."
                    ]
                },
                {
                    designation: "Software Engineer",
                    date: "Jan 2024 - Jan 2025",
                    details: [
                        "Developed POCs to migrate UiPath bots to Power Automate by utilizing Power Automate Desktop Flows and Cloud Flows.",
                        "Utilized Microsoft AI Builder service to automate Invoice data extraction with pre-trained and custom-trained model.",
                        "Developed and implemented UiPath automation solutions to streamline business processes, resulting in 50% to 80% increase in process efficiency.",
                        "Collaborated with business stakeholders to gather requirements, design automation workflows and deliver solutions that met their needs.",
                        "Conducted debugging and testing of UiPath workflows to ensure accuracy and reliability.",
                        "Provided ongoing monitoring, support and maintenance for UiPath robots and Power Automate robots, addressing user inquiries and troubleshooting issues promptly."
                    ]
                },
                {
                    designation: "Assocoate Software Engineer",
                    date: "Dec 2021 - Jan 2024",
                    details: [
                        "Provided monitoring and support(L1 & L2) for UiPath automation projects for client(Health & Life Science company). Responded to user inquiries, providing technical assistance and troubleshooting, resolve issues and test. Generate regular reports and updates on system performances.",
                        "Developed python script to process pdf document to extract text information and convert into new pdf while preserving the format.",
                        "Designed and implemented intent based chatbot for Marlabs website to improve visitors interaction and inquiry experiance. Skills: Rasa Chatbot Framework, HTML, CSS, JavaScript, MongoDB (AWS DocumentDB), AWS EC2, Docker and Nginx."
                    ]
                }
            ]
        },
        {
            company: "Technovert",
            location: "Hydrabad, India",
            positions: [
                {
                    designation: "Intern RPA developer",
                    date: "May 2019 - July 2019",
                    details: [
                        "Contributed as part of the automation team to automate employee selection, onboarding, payslip, reimbursement and exit process combining different platforms like naukri.com, KekaHR and excel by using UiPath. With the use of automation able to reduce time and cost significantly.",
                        "Build email automation process to auto send personalized mass emails based on templates using UiPath.",
                        "Learned about automation tools like UiPath, Automation Anywhere."
                    ]
                }
            ]
        }
    ]

    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-orange-100 to-green-100" id="experiance">
            <h2 className="text-[22px] sm:text-[28px] font-extrabold  flex flex-row">
                <img loading="lazy" className='p-1' src={icon_experiance} height="36px" width="36px" alt='experiance' />
                Experiance
            </h2>
            {experiances.map(item => <ExperianceComponent key={item.company} {...item} />)}
        </FullScreenSection>
    )
}

const ExperianceComponent = ({ company, location, positions }) => {
    return (
        <Reveal className="card p-3 rounded-lg">
            <div >
                <span className="text-[18px] sm:text-[20px] sm:p-2 font-bold text-blue-800">{company},</span>
                <span className="text-[14px] sm:text-[16px] font-semibold">{location}</span>
            </div>
            <div className='gap-4 flex flex-col'>
                {positions.map(position =>
                    <PositionComponent key={position.designation} {...position} />
                )}
            </div>
        </Reveal>
    )
}

const PositionComponent = ({ designation, date, details }) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row py-2 sm:px-2 gap-0 sm:gap-10">
                <span className="font-bold text-[16px] sm:text-[18px]">{designation}</span>
                <span className="font-semibold text-[14px] sm:text-[16px]">{date}</span>
            </div>
            <ul className="list-disc ml-5 sm:ml-10">
                {details.map((item, index) =>
                <Reveal key={index}>
                    <li className="pt-1 text-[12px] sm:text-[16px]">
                        {item}
                    </li>
                </Reveal>    
                )}
            </ul>
        </div>
    )
}

export default Experiance