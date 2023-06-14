import React from "react"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export function XButton ({
    hideEmptyPaddings, icon, title, isDropdown, style, children, accent, className, hideEmptyPaddingsAtMobile,
    ...props
}) {
    const ButtonIcon = () => {
        if (!ButtonhideEmptyPaddings || icon) {
            return <div className="x-button-element x-button-icon">
                {icon || " "}
            </div>
        }
    }

    const ButtonTitle = () => {
        if (!ButtonhideEmptyPaddings || title) {
            return <div className="x-button-element x-button-title">
                {title || children || " "}
            </div>
        }
    }

    const ButtonDropdown = () => {
        const classList = ["x-button-element x-button-dropdown-icon"]

        if (isDropdown) {
            classList.push("visible")
        }
        
        if (!ButtonhideEmptyPaddings || isDropdown) {
          return <div className={classList.join(" ")}>
              <KeyboardArrowDownIcon />
          </div>
        }
    } 

    var ButtonhideEmptyPaddings

    if (document.body.classList.contains("screen-device-mobile")) {
        ButtonhideEmptyPaddings = hideEmptyPaddingsAtMobile
    }

    else {
        ButtonhideEmptyPaddings = hideEmptyPaddings || false
    }

    const ClassList = ["x-button", className]
    ClassList.push(accent || "usual")

    return <div 
            className={ClassList.join(" ")} 
            style={style} {...props}
    >
        <ButtonIcon />
        <ButtonTitle />
        <ButtonDropdown />
    </div>
}