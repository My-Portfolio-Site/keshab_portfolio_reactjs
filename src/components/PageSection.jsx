/* eslint-disable react/prop-types */

const PageSection = ({ children, title, icon_src, ...props }) => {
  return (
    <section className='section dot-overlay relative' {...props}>
      <h2
        className={`section-header sticky top-0 z-10 bg-white/30 rounded-md
             backdrop-blur-sm backdrop-opacity-50 
             -translate-x-5 sm:-translate-x-6 md:-translate-x-8
        `}

      >
        {icon_src && (
          <img
            loading='lazy'
            className='p-1'
            src={icon_src}
            height='36px'
            width='36px'
            alt='experiance'
          />
        )}
        {title ? title : ''}
      </h2>
      {children}
    </section>
  )
}

export default PageSection
