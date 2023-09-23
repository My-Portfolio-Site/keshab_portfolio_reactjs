
import { motion as m } from 'framer-motion'


export const SideReveal = ({children, ...props}) => {
    const iconsReveal = {
        start: {opacity:0, x:-100},
        end: {opacity:1, x:0}
    }
    return (
        <m.div
        variants={iconsReveal}
        initial='start'
        animate='end'
        transition={{type: "spring", duration: 0.5}}
         {...props}>
            {children}
        </m.div>
    )
}