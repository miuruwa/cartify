import React, { useContext, useRef } from "react";

import { ToolKitContext } from "@web-cross-ui/utils/toolkit"

export function XField ({
        icon=null, className="", cleanable=false, flexlist=false, autoComplete="off",
        name="", value="", onChange=()=>{}, fieldValue=null, placeholder=null, type="text"
    }) {
    const inputRef = useRef(null);
    const toolkit = useContext(ToolKitContext);

    const classList = ["x-field"]
    
    if (className) {
        classList.push(className)
    }

    if (icon) {
        classList.push("with-icon")
    }

    const Icon = () => {
        if (icon) {
            return <div className="x-field-icon x-field-item">
              {icon}
            </div>
        }
        else {
            return <></>
        }
    }

    const getPlaceholder = () => {
        return fieldValue ? placeholder + " (" + fieldValue + ")" : placeholder
    }

    const targetInput = () => {
        toolkit.settings.targetInput = name
    }
    const handleChange = (event) => {
        targetInput()
        onChange(event)
    }
    return <label className={classList.join(" ")} >
        <Icon />
        <input
            className = "x-field-input x-field-item"
            key="x-field-input"
            type={type}
            ref={inputRef}
            placeholder={getPlaceholder()}
            value={value}
            name={name}
            onChange={handleChange}
            autoComplete={autoComplete}
            autoFocus={name === toolkit.settings.targetInput}
        />
    </label>
}