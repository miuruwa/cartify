import { useState } from "react"
import "./stylesheet.scss"


export default function (props) {
    const {
        children,
        content,
        position,
        orientation
    } = props

    const [isTriggered, setTriggered] = useState(false)

    const classList = ["webx-dropdown"]

    if (isTriggered) {
        classList.push("active")
    }

    function Root () {
        return <div className="webx-dropdown-root">
            {children}
        </div>
    }

    function Content () {
        const classList = ["webx-dropdown-content"]
        classList.push(position ? `at-${position}-${orientation ? orientation : "left"}` : "at-bottom-left")
        return <div className={classList.join(" ")}>
            {content}
        </div>
    }

    const dropdownContent = {
        className: classList.join(" "),
        onMouseEnter: () => setTriggered(true),
        onMouseLeave: () => setTriggered(false)
    }

    return <div {...dropdownContent}>
        <Root />
        {Content()}
    </div>
}