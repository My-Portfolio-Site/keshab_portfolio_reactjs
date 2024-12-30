import logo from '../assets/LogoSVG/logo20.svg'
// import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { motion as m } from 'framer-motion'
import { SideReveal } from './SideReveal'

const Header = () => {
    // const textReveal = {
    //     initial: { width: 0, opacity: 0 },
    //     animate: { width: 'auto', opacity: 1, transition: { duration: 0.3 } }
    // }

    const logoAnimate = {
        tap: {scale: 0.8},
        hover: {scale: 1.2}
    }

    return (
        <div className='fixed left-1 top-6 md:top-6 md:left-2 lg:top-8 rounded-full flex flex-row gap-3 px-3 '>
            <div className='flex flex-col gap-3'>
                <SideReveal direction='left'>
                    <m.img whileTap='tap' whileHover='hover' variants={logoAnimate} className='h-[35px] w-fit' loading='lazy' src={logo} alt="K" />
                </SideReveal>
                {/* <SideReveal>
                    <m.div initial='initial' whileHover='animate' className='group flex flex-row  gap-1'>
                        <HiOutlineMail className='text-[30px] flex-none text-blue-600' />
                        <m.span variants={textReveal} className='px-2 py-1 truncate text-white bg-blue-600 backdrop-blur-md rounded-xl'>keshabmanni22@gmail.com</m.span>
                    </m.div>
                </SideReveal>
                <SideReveal>
                    <m.div initial='initial' whileHover='animate' className='group flex flex-row  gap-1'>
                        <HiOutlinePhone className='text-[30px] flex-none text-green-600' />
                        <m.div variants={textReveal} className='px-2 truncate  py-1 text-white bg-green-600 backdrop-blur-md rounded-xl'>+91-9542186990</m.div>
                    </m.div>
                </SideReveal> */}
            </div>
        </div>
    )
}

export default Header