import icon_education from '../assets/icons/education.svg'

import FullScreenSection from "./FullScreenSection";
import { Reveal } from "./Reveal";

const Education = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-green-100 to-purple-100" id="education">
            <span className="text-[28px] font-extrabold flex flex-row text-orange-600">
                <img loading="lazy" className='p-1' src={icon_education} height="36px" width="36px" alt='education'/>
                Education
            </span>
            <Reveal className="bg-slate-100 px-10 py-5 rounded-lg w-full ">
                <Reveal className="flex flex-col sm:flex-row p-2">
                    <span className="basis-3/4 text-[22px] font-semibold">B.Tech, Computer Science and Engineering</span>
                    <span className="basis-1/4 right-0 text-[16px]">2016-2021</span>
                </Reveal>
                <Reveal className="flex flex-col gap-1">
                    <span className="text-[20px]">Aditya Engineering College, JNTUK</span>
                    <span className="text-[16px]">Surampalem, Andhra Pradesh, India</span>
                </Reveal>
            </Reveal>
        </FullScreenSection>
    )
}


export default Education