import FullScreenSection from "./FullScreenSection"
import { MdOutlinePersonPin } from 'react-icons/md'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

import { Reveal } from "./Reveal"

const AboutMe = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-yellow-100 to-slate-100" id="About-me">
            <h2 className="text-[28px] font-extrabold flex flex-row text-purple-500"><MdOutlinePersonPin className="p-1 text-[36px]" />About me</h2>
            <Reveal className="card bg-white px-5 sm:px-10 sm:w-4/5 md:w-2/3 mb-20 text-center">
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] md:text-[20px] text-green-600"><HiOutlinePhone className='text-[20px] md:text-[25px]  mt-1' />+91-9542186990</Reveal>
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] md:text-[20px] text-blue-600"><HiOutlineMail className=' text-[20px] md:text-[25px] mt-1' />keshabmanni22@gmail.com</Reveal>
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] md:text-[20px] text-orange-600"><HiOutlineLocationMarker className=' text-[20px] md:text-[25px] mt-1' />Banglore, India</Reveal>
                <Reveal className="flex flex-row gap-2 py-2 text-[16px] md:text-[20px] text-yellow-600"><HiOutlineLocationMarker className=' text-[20px] md:text-[25px] mt-1' />BP Nagar-01, Doti, Nepal</Reveal>
                <Reveal>
                    <p className="text-[18px] text-left " style={{ textIndent: '25px' }}>Experience in developing software solutions with Rasa chatbot framework, UiPath, Python, web technologies(HTML, CSS Javascript) and web frameworks like ReactJs, Django and Nodejs.</p>
                </Reveal>
            </Reveal>
        </FullScreenSection>
    )
}

export default AboutMe