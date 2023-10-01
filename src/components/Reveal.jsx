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
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.05 }}
            {...props}
        >
            {children}
        </m.div>
    )
}