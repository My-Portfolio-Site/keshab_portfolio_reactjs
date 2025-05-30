import FullScreenSection from "./FullScreenSection"

import icon_about from '../assets/icons/about.svg'
import icon_phone from '../assets/icons/phone.svg'
import icon_mail from '../assets/icons/mail.svg'
import icon_location from '../assets/icons/location.svg'

import { Reveal } from "./Reveal"

const AboutMe = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-yellow-100 to-slate-100" id="About-me">
            <h2 className="text-[22px] sm:text-[28px] font-extrabold flex flex-row ">
                <img loading="lazy" className="p-1 text-purple-500" src={icon_about} height='36px' width='36px' alt="about me" />
                About me
            </h2>
            <Reveal className="card bg-white px-5 sm:px-10 mb-20 text-center">
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] sm:text-[20px] text-green-600">
                    <img loading="lazy" width="20px" height="20px" src={icon_phone} className='text-[18px] sm:text-[22px] mt-1' alt="phone"/>
                    +977-9868097562
                </Reveal>
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] sm:text-[20px] text-blue-600">
                    <img loading="lazy" width="20px" height="20px" src={icon_mail} className='text-[18px] sm:text-[22px] mt-1' alt="email"/>
                    keshabmanni22@gmail.com
                </Reveal>
                {/* <Reveal className="flex flex-row gap-2 py-2 text-[16px] sm:text-[20px] text-orange-600">
                    <img loading="lazy" width="20px" height="20px" src={icon_location} className='text-[18px] sm:text-[22px] mt-1' />
                    Banglore, India
                </Reveal> */}
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] sm:text-[20px] text-yellow-600">
                    <img loading="lazy" width="20px" height="20px" src={icon_location} className='text-[18px] sm:text-[22px] mt-1' alt="location"/>
                    Kathmandu, Nepal
                </Reveal>
                <Reveal>
                    <p className="text-[16px] sm:text-[18px] text-left " style={{ textIndent: '25px' }}>
                        I have experience in developing software solutions with UiPath and Power Automate RPA automation tool, 
                        Rasa chatbot framework, Python, web technologies (HTML, CSS, JavaScript) and web frameworks 
                        like ReactJs, Django and NodeJs.
                        </p>
                </Reveal>
            </Reveal>
        </FullScreenSection>
    )
}

export default AboutMe
