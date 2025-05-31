/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useInView } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { motion as m } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'

export const Reveal = ({children, direction='down', ...props}) => {
    const ref= useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainContorls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainContorls.start('end')
        }
    }, [isInView])

    let x, y;
    switch (direction) {
        case 'left':
            x = -100;
            y = 0;
            break;
        case 'right':
            x = 100;
            y = 0;
            break;
        case 'top':
            x = 0;
            y = -20;
            break;
        case 'down':
            x = 0;
            y = 20;
            break;
        default:
            x = 0;
            y = 0;
    }
    const itemReveal = {
        start: {opacity: 0, x: x, y: y},
        end: {opacity: 1, x: 0, y: 0}
    }
    // console.log(itemReveal, children);
    
    return (
        <m.div ref={ref}
        variants={itemReveal}
        initial='start'
        animate={mainContorls}
        transition={{type: "spring", duration: 0.8}}
         {...props}>
            {children}
        </m.div>
    )
}
