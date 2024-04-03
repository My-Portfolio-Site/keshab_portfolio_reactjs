import icon_education from '../assets/icons/education.svg'

import FullScreenSection from "./FullScreenSection";
import { Reveal } from "./Reveal";

const Education = () => {
    return (
        <FullScreenSection className="gap-3 bg-gradient-to-b from-green-100 to-purple-100" id="education">
            <span className="text-[22px] sm:text-[28px] font-extrabold flex flex-row text-orange-600">
                <img loading="lazy" className='p-1' src={icon_education} height="36px" width="36px" alt='education'/>
                Education
            </span>
            <Reveal className="bg-slate-100 px-5 py-5 rounded-lg w-full ">
                <Reveal className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                    <span className="font-bold text-[14px] sm:text-[18px]">B.Tech, Computer Science and Engineering</span>
                    <span className="font-semibold text-[12px] sm:text-[16px]">Sep 2016 - July 2021</span>
                </Reveal>
                <Reveal className="flex flex-col sm:flex-row gap-1 text-[12px] sm:text-[16px]">
                    <span className="font-semibold">Aditya Engineering College, JNTUK</span>
                    <span className="">(Surampalem, Andhra Pradesh, India)</span>
                </Reveal>
            </Reveal>
        </FullScreenSection>
    )
}


export default Education