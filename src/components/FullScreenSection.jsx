

const FullScreenSection = ({ children, className, ...props }) => {
    return (
        <section className={`fullScreen ${className}`} {...props}>
            {children}
        </section>
    )
}

export default FullScreenSection