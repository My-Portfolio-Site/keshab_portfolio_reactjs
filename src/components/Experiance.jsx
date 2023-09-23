
import FullScreenSection from "./FullScreenSection";
import { FaComputer } from 'react-icons/fa6'
import { Reveal } from "./Reveal";

const Experiance = () => {
    const experiances = [
        {
            company: "Marlabs Pvt Ltd",
            location: "Banglore, India",
            position: "Assocoate Software Engineer",
            date: "Dec 2021 - Present",
            details: [
                "Designed and implemented intent based chatbot for Marlabs website to improve interaction and inquiry. Developed chatbot with Rasa Framework and front-end with HTML, CSS and JavaScript. Used MongoDB(AWS DocumentDB) for storing responses and deployed on AWS EC2(Ubuntu) server with Docker and Nginx as reverse proxy server.",
                "Automated POC of Remote PC automation with UiPath using Computer Vision activities.",
                "Developed python script to process pdf document to extract text information and convert into new pdf while preserving the format."
            ]
        },
        {
            company: "Technovert",
            location: "Hydrabad, India",
            position: "Intern RPA developer",
            date: "May 2019 - July 2019",
            details: [
                "Contributed as part of the automation team to automate employee selection, onboarding, payslip, reimbursement and exit process combining different platforms like naukri.com, KekaHR and excel by using UiPath. With the use of automation able to reduce time and cost significantly.",
                "Build email automation process to auto send personalized mass emails based on templates using UiPath.",
                "Learned about automation tools like UiPath, Automation Anywhere."
            ]
        }
    ]

    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-orange-100 to-green-100">
            <h2 className="text-[28px] font-extrabold flex flex-row text-purple-500"><FaComputer className="p-1 text-[36px]" />Experiance</h2>
            {experiances.map(item => <ExperianceComponent key={item.company} {...item} />)}
        </FullScreenSection>
    )
}

const ExperianceComponent = ({ company, location, position, date, details }) => {
    return (
        <Reveal className="p-3 bg-slate-100 rounded-lg">
            <div>
                <span className="text-[20px] p-2 font-semibold text-blue-500">{company},</span>
                <span className="text-[16px]  font-bold">{location}</span>
            </div>
            <div className="flex flex-col sm:flex-row p-2">
                <span className="basis-3/4 text-[14px] md:text-[18px]">{position}</span>
                <span className="basis-1/4 text-[14px] md:text-[18px]">{date}</span>
            </div>
            <div>
                <ul className="list-disc ml-10">
                    {details.map((item, index) =>
                        <li key={index} className="pt-1 text-[15px]">
                            <Reveal>
                                {item}
                            </Reveal>
                        </li>
                    )}
                </ul>
            </div>
        </Reveal>
    )
}


export default Experiance