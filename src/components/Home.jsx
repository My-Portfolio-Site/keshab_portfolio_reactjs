import FullScreenSection from './FullScreenSection';
import myPhoto from '../assets/images/photo_s.jpg'

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { Reveal } from './Reveal';

const Home = () => {
    const cv_url = "./Keshab%20Manni_CV_Software%20Developer.pdf" //"https://drive.google.com/uc?id=1LGwbp8xk0M1mhOnkFlZnIUbeiXF669yi&export=download"
    const cv_pdf = "https://drive.google.com/uc?id=1klDSLP6-2EeVuEPprSn6cmi1QQLg55O_&export=download"
    return (
        <FullScreenSection className='items-center flex-none bg-gradient-to-b from-slate-100 to-orange-100' id="web-RPA-chatbot-developer-portfolio">
            <Reveal className='text-[38px] font-bold font-Quicksand text-emerald-600'><strong className='text-purple-700'>K</strong>eshab <strong className='text-purple-700'>M</strong>anni</Reveal>
            <Reveal className='text-[17px] text-sky-700'>Software Developer</Reveal>
            <Reveal className='text-[18px] md:text-[20px]'>ReactJs <strong className='text-purple-700'>|</strong> Chatbot <strong className='text-purple-700'>|</strong> RPA <strong className='text-purple-700'>|</strong> Python</Reveal>
            <Reveal className='flex flex-row gap-3 my-4'>
                <a href='https://github.com/keshabmanni' target='_blank' rel="noreferrer noopener">
                    <FaGithubSquare className='text-[32px] cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/keshabmanni/' target='_blank' rel="noreferrer noopener">
                <FaLinkedin className='text-[32px] text-cyan-600 cursor-pointer' />
                </a>
                <a download="CV_Keshab Manni_Software Developer.pdf" href={cv_url} className='rounded-full bg-violet-600 flex flex-row text-white px-3 py-1'>Resume <LuDownload className='ml-1 text-[20px]' /></a>
            </Reveal>
            <Reveal>
                <img className='w-72 rounded-full' src={myPhoto} alt='keshab manni photo'/>
            </Reveal>
        </FullScreenSection>
    );
}

export default Home;