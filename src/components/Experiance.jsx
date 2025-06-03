/* eslint-disable react/prop-types */

import icon_experiance from '../assets/icons/experiance.svg'

import PageSection from "./PageSection";
import { Reveal } from "./Reveal";
import Card from './Card';

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
        <PageSection title="Experiance" icon_src={icon_experiance} id='Experiance'>
            {experiances.map(item => <ExperianceComponent key={item.company} {...item} />)}
        </PageSection>
    )
}

const ExperianceComponent = ({ company, location, positions }) => {
    return (
        <Card>
            <div >
                <span className="text-[18px] sm:text-[20px] sm:p-2 font-bold text-primary">{company},</span>
                <span className="text-[14px] sm:text-[16px] font-semibold">{location}</span>
            </div>
            <div className='gap-3 flex flex-col'>
                {positions.map(position =>
                    <PositionComponent key={position.designation} {...position} />
                )}
            </div>
        </Card>
    )
}

const PositionComponent = ({ designation, date, details }) => {
    return (
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 pt-3 px-2 sm:pt-4 sm:px-3">
        <div className="flex-shrink-0 sm:w-1/4">
          <div className="flex flex-col">
            <Reveal>
              <span className="font-bold text-lg text-primary">{designation}</span>
            </Reveal>
            <Reveal>
              <span className="text-sm text-textMuted mt-1">{date}</span>
            </Reveal>
          </div>
        </div>
  
        {/* Right Column: Details List */}
        <div className="flex-grow">
          <ul className="list-disc ml-5 space-y-2">
            {details.map((item, index) => (
              <Reveal key={index}>
                <li className="text-sm text-textBase leading-relaxed">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default Experiance