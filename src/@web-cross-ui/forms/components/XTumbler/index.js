import { useState } from "react"

export function XTumbler ({state, setState}) {
    const [triggered, setTriggered] = useState(state);
    const outerClassList = ["x-tumbler"]

    if (triggered) {
        outerClassList.push("triggered")
    }

    const onToggle = () => {
        setTriggered(!triggered)
        setTimeout(() => {
            setState(!state)
        }, 100)
    }

    return <div
        className={outerClassList.join(" ")}
        onClick={onToggle}
    >
        <div>
            &nbsp;
        </div>
    </div>
}