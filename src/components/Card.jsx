/* eslint-disable react/prop-types */

import { Reveal } from './Reveal'
import { motion as m } from 'framer-motion'

const Card = ({ children, ...props }) => {
  return (
    <Reveal direction='down'>
      <m.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='p-3 bg-surface rounded-xl shadow-lg'
        {...props}
      >
        {children}
    </m.div>
    </Reveal>
  )
}

export default Card;