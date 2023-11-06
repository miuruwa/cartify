import {
    useContext, useEffect, useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"


import ItemAPIContext from "../Context"
import languages from "../languages"
import Multiply from "./Multiply"
import Cost from "./Cost"


function Form() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]
    const itemAPI = useContext(ItemAPIContext)

    const [item, setItem] = useState(itemAPI.item)

    function handleChange(event) {
        setItem(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ))
        
    }

    function handleSubmit() {
        itemAPI.handleChange(item)
    }

    const inputProps = {
        type: "text",
        onChange: handleChange
    }

    const nameProps = {
        ...inputProps,
        name: "name",
        value: item.name,
        placeholder: actualLanguage.name
    }

    const priceProps = {
        ...inputProps,
        name: "price", inputMode: "decimal",
        value: item.price,
        placeholder: actualLanguage.price
    }

    const quantityProps = {
        ...inputProps,
        name: "quantity", inputMode: "decimal",
        value: item.quantity,
        placeholder: actualLanguage.quantity
    }

    useEffect(
        () => {
            const timeoutID = setTimeout(() => {
                itemAPI.handleChange(item)
            }, 100)

            return () => clearTimeout(timeoutID)
        }, [item, itemAPI]
    )

    return <form onSubmit={handleSubmit}>
        <div className="sheet-item-form">
            <input {...nameProps} />
            <input {...priceProps} />
            <Multiply />
            <input {...quantityProps} />
            <Cost />
        </div>
    </form>
}

export default Form