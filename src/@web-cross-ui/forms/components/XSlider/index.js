import {
    useState
} from "react"

import {
    handleChange
} from "@web-cross-ui/utils"

export function XSlider (props) {
    const [state, setState] = useState({
        value: props.min,
    })

    const setValue = (value) => {
        if (props.min <= value && value <= props.max) {
            props.setValue(value)
            
            setState({
                value: value,
            })
        }
    }

    const Input = () => {
        return <div className="x-slider-input">
            <input
                type="range"
                min={props.min}
                max={props.max}
                value={state.value}
                onChange={handleChange(setValue)}
            />
        </div>
    }

    const Output = () => {
        return <div className="x-slider-output">
            {state.value}
        </div>
    }

    return <div className="x-slider">
        <Input />
        <Output />
    </div>
}