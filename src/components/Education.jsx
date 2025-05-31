import icon_education from '../assets/icons/education.svg'

import FullScreenSection from "./FullScreenSection";
import { Reveal } from "./Reveal";

const Education = () => {
    return (
        <FullScreenSection className="gap-5" id="education">
            <span className="section-header">
                <img loading="lazy" className='p-1' src={icon_education} height="36px" width="36px" alt='education'/>
                Education
            </span>
            <Reveal className="w-full">
                <div className='px-5 py-5 bg-surface rounded-lg shadow-lg'>

                <Reveal className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                    <span className="font-bold text-[14px] sm:text-[18px]">B.Tech, Computer Science and Engineering</span>
                    <span className="font-semibold text-sm sm:text-base">Sep 2016 - July 2021</span>
                </Reveal>
                <Reveal className="flex flex-col sm:flex-row gap-1 text-sm sm:text-base">
                    <span className="font-semibold">Aditya Engineering College, JNTUK</span>
                    <span className="">(Surampalem, Andhra Pradesh, India)</span>
                </Reveal>
                </div>
            </Reveal>
        </FullScreenSection>
    )
}


export default Education