import logo from '../assets/LogoSVG/logo20.svg'
import { Reveal } from './Reveal'

const Header = () => {
  return (
    <div className='fixed left-1 top-6 md:top-6 md:left-2 lg:top-8 rounded-full flex flex-row gap-3 px-3 '>
      <Reveal direction="right">
        <div className='flex flex-col gap-3'>
          <img className='h-[35px] w-fit' src={logo} alt='K' />
        </div>
      </Reveal>
    </div>
  )
}

export default Header
