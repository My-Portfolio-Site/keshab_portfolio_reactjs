/* eslint-disable react/prop-types */

import { Reveal } from './Reveal'

const Card = ({ children, ...props }) => {
  return (
    <Reveal
      direction='down'
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className='p-3 bg-surface rounded-xl shadow-lg'
      {...props}
    >
      {children}
    </Reveal>
  )
}

export default Card
