import PageSection from "./PageSection"

import icon_about from '../assets/icons/about.svg'
import icon_phone from '../assets/icons/phone.svg'
import icon_mail from '../assets/icons/mail.svg'
import icon_location from '../assets/icons/location.svg'

import { Reveal } from "./Reveal"

const AboutMe = () => {
    return (
        <PageSection title="About me" icon_src={icon_about} id='AboutMe'>
            <Reveal className="card bg-surface rounded-xl shadow-lg p-6 md:p-8 w-full mb-20">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Left Column: Contact Info */}
                    <div className="md:w-1/3 flex flex-col gap-4">
                        <Reveal className="flex items-center gap-3 text-left">
                            <img loading="lazy" src={icon_phone} className='w-5 h-5 text-primary' alt="phone" />
                            <span className="text-sm text-textBase hover:text-primary transition-colors">+977-9868097562</span>
                        </Reveal>
                        <Reveal className="flex items-center gap-3 text-left">
                            <img loading="lazy" src={icon_mail} className='w-5 h-5 text-primary' alt="email" />
                            <span className="text-sm text-textBase hover:text-primary transition-colors">keshabmanni22@gmail.com</span>
                        </Reveal>
                        <Reveal className="flex items-center gap-3 text-left">
                            <img loading="lazy" src={icon_location} className='w-5 h-5 text-primary' alt="location" />
                            <span className="text-sm text-textBase hover:text-primary transition-colors">Kathmandu, Nepal</span>
                        </Reveal>
                    </div>

                    {/* Right Column: Biography */}
                    <div className="md:w-2/3">
                        <Reveal>
                            {/* Removed text-indent style, adjusted text size and alignment */}
                            <p className="text-base text-textBase leading-relaxed text-left">
                                I have experience in developing software solutions with UiPath and Power Automate RPA automation tool,
                                Rasa chatbot framework, Python, web technologies (HTML, CSS, JavaScript) and web frameworks
                                like ReactJs, Django and NodeJs.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Reveal>
        </PageSection>
    )
}

export default AboutMe;