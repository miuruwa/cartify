import MenuIcon from "@webx/icons/BackIcon"
import "./stylesheet.scss"


function Icon ({children}) {
    if (children) {
        return <div className="webx-button-icon">
            {children}
        </div>
    }
}

function Title ({children}) {
    if (children) {
        return <div className="webx-button-title">
            {children}
        </div>
    }
}

function DropdownIcon ({enabled}) {
    if (enabled) {
        return <div className="webx-button-icon dropdown-icon">
            <MenuIcon />
        </div>
    }
}


export default function (props) {
    const {
        className, xstyle,
        icon, title, theme, alt, isDropdown
    } = props

    const classList = []
    classList.push("webx-button")
    classList.push(`theme-${theme || "white"}`)

    if (icon) {
        classList.push("button-i")
    }
    
    if (title) {
        classList.push("button-t")
    }

    if (isDropdown) {
        classList.push("at-dropdown")
    }

    if (className) {
        classList.push(className)
    }

    const buttonProps = {
        className: classList.join(" "),
        style: xstyle,
        title: alt,
        ...props
    }

    return <div {...buttonProps}>
        <Icon children={icon} />
        <Title children={title} />
        <DropdownIcon enabled={isDropdown} />
    </div>
}