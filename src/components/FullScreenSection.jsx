/* eslint-disable react/prop-types */


const FullScreenSection = ({ children, className, ...props }) => {
    return (
        <section className={`fullScreen z-0 ${className}`} {...props}>
            {children}
        </section>
    )
}

export default FullScreenSection