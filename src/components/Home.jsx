
import icon_linkedIn from '../assets/icons/linkedin.svg'
import icon_github from '../assets/icons/github.svg'
import icon_download from '../assets/icons/download.svg'

import FullScreenSection from './FullScreenSection';
import { Reveal } from './Reveal';


const Home = () => {

    const cv_url = "./Software Engineer-Keshab Manni.pdf"
    const europass_cv_url = "./Keshab Manni_EuropassCV_Software Engineer.pdf"

    return (
        <FullScreenSection className='items-center flex-none bg-gradient-to-b from-slate-100 to-orange-100' id="web-RPA-chatbot-developer-portfolio">
            <Reveal direction="right" className='text-[38px] font-bold font-Quicksand text-emerald-600'><strong className='text-purple-700'>K</strong>eshab <strong className='text-purple-700'>M</strong>anni</Reveal>
            <Reveal direction="top" className='text-[20px] font-bold text-sky-700'>Software Engineer</Reveal>
            <Reveal direction="top" className='text-[15px] sm:text-[20px]'>UiPath <strong className='text-purple-700'>|</strong> Power Automate <strong className='text-purple-700'>|</strong> ReactJs <strong className='text-purple-700'>|</strong> Chatbot <strong className='text-purple-700'>|</strong> Python</Reveal>
            <Reveal direction="top" className='flex flex-row gap-3 my-4'>
                <a aria-label='Keshab Manni GitHub link' href='https://github.com/keshabmanni' target='_blank' rel="noreferrer noopener">
                    <img loading="lazy" src={icon_github} width='32px' height='32px' className='cursor-pointer' alt='Github'/>
                </a>
                <a aria-label='Keshab Manni LinkedIn' href='https://www.linkedin.com/in/keshabmanni/' target='_blank' rel="noreferrer noopener">
                    <img loading="lazy" src={icon_linkedIn} width='32px' height='32px' className='cursor-pointer' alt='LinkedIn' />
                </a>
                <a download="CV_Keshab Manni_Software Developer.pdf" href={cv_url} className='rounded-full bg-violet-600 flex flex-row text-white px-3 py-1'>CV <img loading="lazy" className='ml-1' src={icon_download} width='20px' height='20px' alt='Download CV' /></a>
                <a download="CV_Keshab Manni_Software Developer.pdf" href={europass_cv_url} className='rounded-full bg-violet-600 flex flex-row text-white px-3 py-1'>Europass CV <img loading="lazy" className='ml-1' src={icon_download} width='20px' height='20px' alt='Download CV' /></a>
            </Reveal>

            <Reveal direction="down">
                <img loading='lazy' className='w-72 rounded-full'
                    width="288px" height="288px"
                    src="my_photo.jpg"
                    alt='keshab manni photo'
                />
            </Reveal>
        </FullScreenSection>
    );
}

export default Home;
