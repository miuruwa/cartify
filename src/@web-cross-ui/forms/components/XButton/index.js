import React from "react"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export function XButton ({
    icon, title, isDropdown, style, children, accent, className,
    hideEmptyPaddingsAtMobile, hideEmptyPaddings,
    ...props
}) {
    const ButtonIcon = () => {
        if (icon) {
            return <div className="x-button-element x-button-icon">
                {icon || " "}
            </div>
        }
    }

    const ButtonTitle = () => {
        if (title) {
            return <div className="x-button-title">
                {title || children || " "}
            </div>
        }
    }

    const ButtonDropdown = () => {
        if (isDropdown) {
          return <div className="x-button-dropdown-icon">
              <KeyboardArrowDownIcon />
          </div>
        }
    }

    const ClassList = ["x-button"]

    if (className) {
        ClassList.push(className)
    }
    
    if (icon) {
        ClassList.push("with-icon")
    }
    
    if (title) {
        ClassList.push("with-title")
    }

    if (isDropdown) {
        ClassList.push("at-dropdown")
    }
    
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