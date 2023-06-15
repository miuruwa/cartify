import {
    useState
} from "react"

import {
    XBlock
} from "../XBlock"

import {
    XDropdown
} from "../XDropdown"

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

    const HoverContent = () => {
        return <XBlock className="tumbler-hint">
            <p>
                Нажмите на этот новый тумблер, чтобы переключить состояние
            </p>
        </XBlock>    
    }

    const Tumbler = () => {
        return <div
                className={outerClassList.join(" ")}
                onClick={onToggle}
        >
            <div>
                &nbsp;
            </div>
        </div>
    }

    return <XDropdown
        dropdown={<HoverContent/>}
        openOnClick={false} closeOnClick={false}
        openOnEnter={true} closeOnHover={true}
    >
        <Tumbler />
    </XDropdown>
}