export function MountBlock({
    visibilityState, children, className
}) {
    const classList = ["mount-block", className]

    if (visibilityState) {
        classList.push("visible")
    }

    return <div className={classList.join(" ")}>
        {children}
    </div>
}
