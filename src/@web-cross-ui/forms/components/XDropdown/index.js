import {
    useState
} from 'react'

import {
    CheckValue
} from "@web-cross-ui/utils"

export function XDropdown (props) {
    const [isVisible, setVisible] = useState (false)

    const closeAction = () => {
        setVisible(false)
    }

    const openAction = () => {
        setVisible(true)
    }

    const toggleClick = () => {
        isVisible ? closeAction() : openAction()
    }

    const DropdownContent = () => {
        const wrapperClassList = ["x-dropdown-wrapper"]
        const contentClassList = ["x-dropdown-content"]

        switch (props.contentPosition) {
            case "left-top":
                wrapperClassList.push("x-dropdown-pose-at-left-top")
                break

            case "left-bottom":
                wrapperClassList.push("x-dropdown-pose-at-left-bottom")
                break

            case "right-top":
                wrapperClassList.push("x-dropdown-pose-at-right-top")
                break

            case "right-bottom":
                wrapperClassList.push("x-dropdown-pose-at-right-bottom")
                break

            case "top-left":
                wrapperClassList.push("x-dropdown-pose-at-top-left")
                break

            case "top-right":
                wrapperClassList.push("x-dropdown-pose-at-top-right")
                break

            case "bottom-left":
                wrapperClassList.push("x-dropdown-pose-at-bottom-left")
                break

            default:
                wrapperClassList.push("x-dropdown-pose-at-bottom-right")
        }

        contentClassList.push(
          `direction-${CheckValue(props.listDirection, "row", "column")}`
        )
        
        if (isVisible) {
            wrapperClassList.push("visible")
        }

        return <div className={wrapperClassList.join(" ")}>
            <div className={contentClassList.join(" ")}>
                {props.dropdown}
            </div>
        </div>
    }

    const DropdownChildren = () => {
        const buttonClassList = ["x-dropdown-children"]

        return <div
                className={buttonClassList.join(" ")}
                onClick={toggleClick}
        >
            {props.children}
        </div>
    }

    const dropdownClassList = ["x-dropdown"]

    return <div className={dropdownClassList.join(" ")} 
            onMouseLeave={closeAction}
    >
        <DropdownChildren />
        {DropdownContent()}
    </div>
}
