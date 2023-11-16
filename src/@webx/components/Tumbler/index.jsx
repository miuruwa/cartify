import { useState } from "react"
import "./stylesheet.scss"

function useToggle (state, setState) {
    const [
        isTriggered, setTriggered
    ] = useState(state)

    const onTrigger = () => {
        setTriggered(prev => {
            const newState = !prev

            setTimeout(() => {
                setState(newState)
            }, 100)

            return newState
        })
        
    }

    return [isTriggered, onTrigger]
}

export default function (props) {
    const [isTriggered, onTrigger] = useToggle(props.state, props.setState)

    const classList = ["component"]

    if (isTriggered) {
        classList.push("active")
    }

    const tumblerProps = {
        children: <div className={classList.join(" ")}> <div children="&nbsp;" /> </div>,
        className: "webx-tumbler",
        onClick: onTrigger
    }

    return <div {...tumblerProps} />
}