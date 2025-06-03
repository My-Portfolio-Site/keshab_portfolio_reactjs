import icon_linkedIn from '../assets/icons/linkedin.svg'
import icon_github from '../assets/icons/github.svg'
import icon_download from '../assets/icons/download.svg'

// import PageSection from './PageSection'
import { Reveal } from './Reveal'

const Introduction = () => {
  const cv_url = './Software Engineer-Keshab Manni.pdf'
  const europass_cv_url = './Keshab Manni_EuropassCV_Software Engineer.pdf'

  return (
    <section
      className='section dot-overlay items-center flex-none gap-0'
      id='Introduction'
    >
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full px-4 md:px-0'>
        {/* Column 1: Image */}
        <Reveal direction='down' className='md:w-1/3 flex-shrink-0'>
          <div className='relative'>
            <img
              loading='lazy'
              className='object-cover'
              // className='w-60 sm:w-72 rounded-full mx-auto md:mx-0' // mx-auto for mobile centering, md:mx-0 for left align in column
              width='288px' // Keep explicit width/height for preventing layout shift
              height='288px'
              src='my_photo.jpg'
              alt='keshab manni photo'
              style={{
                maskImage: 'url(mask_brush.png)',
                WebkitMaskImage: 'url(mask_brush.png)',
                maskSize: '290px 290px',
                WebkitMaskSize: '288px 288px',  
              }}
            />
          </div>
        </Reveal>

        {/* Column 2: Text Content */}
        <div className='flex flex-col items-center md:items-start md:w-2/3'>
          <Reveal
            direction='right'
            className='w-full text-3xl sm:text-[38px] font-bold font-Quicksand text-primary text-center md:text-left'
          >
            <strong className='text-secondary'>K</strong>eshab{' '}
            <strong className='text-secondary'>M</strong>anni
          </Reveal>
          <Reveal
            direction='top'
            className='w-full text-[20px] font-bold font-Quicksand text-textBase text-center md:text-left mt-1'
          >
            {' '}
            {/* Added mt-1 for a bit of space */}
            Software Engineer
          </Reveal>
          <Reveal
            direction='top'
            className='w-full text-[15px] sm:text-[20px] text-center md:text-left mt-2'
          >
            {' '}
            {/* Added mt-2 for a bit of space */}
            UiPath <strong className='text-secondary'>|</strong> Power Automate{' '}
            <strong className='text-secondary'>|</strong> ReactJs{' '}
            <strong className='text-secondary'>|</strong> Chatbot{' '}
            <strong className='text-secondary'>|</strong> Python
          </Reveal>
          <Reveal
            direction='top'
            className='w-full flex flex-row flex-wrap gap-3 my-4 justify-center md:justify-start'
          >
            <a
              aria-label='Keshab Manni GitHub link'
              href='https://github.com/keshabmanni'
              target='_blank'
              rel='noreferrer noopener'
              className='hover:opacity-75 transition-opacity'
            >
              <img
                loading='lazy'
                src={icon_github}
                width='32px'
                height='32px'
                className='cursor-pointer'
                alt='Github'
              />
            </a>
            <a
              aria-label='Keshab Manni LinkedIn'
              href='https://www.linkedin.com/in/keshabmanni/'
              target='_blank'
              rel='noreferrer noopener'
              className='hover:opacity-75 transition-opacity'
            >
              <img
                loading='lazy'
                src={icon_linkedIn}
                width='32px'
                height='32px'
                className='cursor-pointer'
                alt='LinkedIn'
              />
            </a>
            <a
              download='CV_Keshab Manni_Software Developer.pdf'
              href={cv_url}
              className='rounded-full bg-primary flex flex-row text-white px-3 py-1 hover:bg-primary/90 transition-colors'
            >
              CV{' '}
              <img
                loading='lazy'
                className='ml-1'
                src={icon_download}
                width='20px'
                height='20px'
                alt='Download CV'
              />
            </a>
            <a
              download='CV_Keshab Manni_Software Developer.pdf'
              href={europass_cv_url}
              className='rounded-full bg-primary flex flex-row text-white px-3 py-1 hover:bg-primary/90 transition-colors'
            >
              Europass CV{' '}
              <img
                loading='lazy'
                className='ml-1'
                src={icon_download}
                width='20px'
                height='20px'
                alt='Download CV'
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Introduction
