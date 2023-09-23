import { useEffect, useRef } from 'react'
import { motion as m, useAnimation, useInView } from 'framer-motion'

export const Reveal = ({ children, ...props }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView])

    return (
        <m.div
            ref={ref} variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.1 }}
            {...props}
        >
            {children}
        </m.div>
    )
}