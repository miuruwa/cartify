import {
    useState
} from 'react'

import DoneIcon from '@mui/icons-material/Done'


export function XCheckBox (props) {
    const [state, setState] = useState ({
        boxState: props.state,
    })

    const setBoxState = () => {
        setState({
            boxState: !state.boxState,
        })

        props.setState(state.boxState)
    }

    const Icon = () => {
        if (!props.hideEmptyPaddings || props.icon) {
            return <div className="x-check-box-element x-check-box-icon" onClick={setBoxState}>
                <DoneIcon />
            </div>
        }
    }

    const Title = () => {
        const title = props.title || props.children

        if (title) {
            return <div className="x-check-box-element x-check-box-title">
                {title}
            </div>
        }
    }

    const ClassList = ["x-check-box"]

    if (state.boxState) {
        ClassList.push("marked")
    }

    return <div 
            className={ClassList.join(" ")} 
            onClick={props.onClick} 
            style={props.style}
    >
        <Icon />
        <Title />
    </div>
}