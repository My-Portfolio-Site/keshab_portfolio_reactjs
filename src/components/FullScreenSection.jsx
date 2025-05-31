/* eslint-disable react/prop-types */


const FullScreenSection = ({ children, className, ...props }) => {
    return (
        <section className={`fullScreen dot-overlay z-0 bg-gradient-to-b even:from-background1 even:to-background2 odd:from-background2 odd:to-background1 ${className}`} {...props}>
            {children}
        </section>
    )
}

export default FullScreenSection