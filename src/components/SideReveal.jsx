/* eslint-disable react/prop-types */

import { motion as m } from 'framer-motion'

export const SideReveal = ({children, direction = 'left', ...props}) => {
    const itemReveal = {
        start: {opacity: 0, x: direction === 'left' ? -100 : 100},
        end: {opacity: 1, x: 0}
    }
    return (
        <m.div
        variants={itemReveal}
        initial='start'
        animate='end'
        transition={{type: "spring", duration: 0.5}}
         {...props}>
            {children}
        </m.div>
    )
}
