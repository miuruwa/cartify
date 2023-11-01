import {
    Button
} from "@webx/forms"


function ActionButton(props) {
    const buttonProps = {
        theme: "white",
        icon: props.icon,
        alt: props.title,
        onClick: props.onClick
    }

    return <Button {...buttonProps} />
}

export default ActionButton