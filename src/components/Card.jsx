/* eslint-disable react/prop-types */

import { Reveal } from './Reveal'

const Card = ({ children, ...props }) => {
  return (
    <Reveal
      direction='down'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className='p-3 bg-surface rounded-xl shadow-lg'
      {...props}
    >
      {children}
    </Reveal>
  )
}

export default Card
