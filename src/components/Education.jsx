import icon_education from '../assets/icons/education.svg'

import PageSection from "./PageSection";
import { Reveal } from "./Reveal";
import Card from './Card';

const Education = () => {
    return (
        <PageSection title={"Education"} icon_src={icon_education} id="education">
            <Card className="w-full">
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
            </Card>
        </PageSection>
    )
}


export default Education