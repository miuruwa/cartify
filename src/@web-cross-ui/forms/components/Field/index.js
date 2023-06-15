import React, { createRef, useState } from "react"

import CloseIcon from '@mui/icons-material/Close'

export function TextField ({
    icon, field, setField, fieldValue,
    children, onEnter, onBlur, onFocus,
    flexlist, noWrap, cleanable, className
}) {
    // ПЕРЕДЕЛАТЬ!
    
    const textField = createRef(null)

    const [
        inputField, setInputField
    ] = useState(field)

    const [
        valueCheckMark, setValueCheckMark
    ] = useState(field)

    const [
        mouseOver, setMouseOver
    ] = useState(false)

    const [
        focus, setFocus
    ] = useState(false)

    const Icon = () => {
        if (icon) {
            return <div className="x-field-icon">
                {icon}
            </div>
        }
    }

    const Value = () => {
        if (fieldValue && valueCheckMark !== "") {
            return <div className="x-field-value-wrap">
                    {fieldValue}
                </div>
        }
    }

    const ClearButton = () => {
        if (valueCheckMark !== "") {
            return <div 
                    className="x-field-clear" 
                    onClick={
                        () => {
                            textField.current.innerHTML = ""
                            setValueCheckMark("")
                        }
                    }
            >
                    <CloseIcon />
            </div>
        }
    }

    const updateInput = (e) => {
        setValueCheckMark(e.target.innerHTML)
    }

    const Field = () => {
        const text = fieldValue ? children + " (" + fieldValue + ")" : children
        const classList = ["x-field-input"]

        const onEnter = () => {
            setMouseOver(true)
        }
        
        const onLeave = () => {
            setMouseOver(false)
        }

        return (
            <div
                className={classList.join(" ")}
                ref={textField}
                onFocus={onFocusIn}
                onBlur={onFocusOut}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onInput={updateInput}
                data-placeholder={text}
            >
                {inputField}
            </div>
        )
    }

    const focusField = () => {
        textField.current?.focus()
    }

    const enterEvent = () => {
        let focusOut = () => {
            textField.current?.blur()
            if (onEnter) {
                onEnter()
            }
        }

        return function(event) {
            if (event.key === "Enter") {
                focusOut()
            }

        }
    }

    const clickEvent = () => {
        let focusOut = () => {
            textField.current?.blur() 
            if (onEnter) {
                onEnter()
            }
        }

        return (e) => {
            if (e.button === 0 && mouseOver === false) {
                focusOut()
            }
        }
    }

    const onFocusOut = () => {
        if (typeof onBlur === 'function') {
            onBlur()
        }
        
        if (field !== textField.current?.innerHTML) {
            setField(textField.current?.innerHTML)
        }
        setFocus(false)
        setInputField(textField.current?.innerHTML)

        window.removeEventListener("keypress", enterEvent())
        window.removeEventListener("click", clickEvent())
    }

    const onFocusIn = () => {
        if (typeof onFocus === 'function') {
            onFocus()
        }

        setFocus(true)

        window.addEventListener("keypress", enterEvent())
        window.addEventListener("click", clickEvent())
    }
    
    const classList = ["x-field"]

    if (focus) {
        classList.push("selected")
    }

    if (flexlist) {
        classList.push("max-list")
    }

    if (noWrap) {
        classList.push("no-wrap")
    }

    if (cleanable) {
        classList.push("clearable")
    }
    // flexlist, noWrap, cleanable

    classList.push(className)

    return <div className={classList.join(" ")} onClick={focusField}>
        <Icon />
        <Field />
        <Value />
        <ClearButton />
    </div>
}