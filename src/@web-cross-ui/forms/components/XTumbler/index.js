import {
    useState
} from "react"

import {
    nanoid
} from "nanoid"

export function XTumbler (props) {
    const [state, setState] = useState({
        context: props.context,
    })

    const setContext = (value) => {
        props.setContext(value)

        setState({
            context: value,
        })
    }

    const ContextButton = (item) => {
        var classList = ["x-tumbler-item"]

        if (state.context === item.context) {
            classList.push("x-tumbler-selected")
        }
        
        if (item.type) {
            classList.push("svg")
        }

        return (
            <div
                  className={classList.join(" ")}
                  key={nanoid()}
                  onClick={() => {
                      setContext(item.context)
                  }}
            >
                {item.name}
            </div>
        )
    }

    return <div className="x-tumbler">
        <div className="x-tumbler-wrapper">
            {props.tumbleConfig.map(ContextButton)}
        </div>
    </div>
        
}
