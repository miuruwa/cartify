import { useState } from "react";

import { useToolKit } from "@webx/toolkit";

import { useItem } from "../../Item"
import languages from "../../languages"
import Buttons from "./Buttons";


export default function (setStateEdit) {
    const toolkit = useToolKit()
    const item = useItem()
    const [data, setData] = useState(item.product)
    const actualLanguage = languages[toolkit.settings.language]

    function handleChange(event) {
        setData(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ));
    }

    const nameProps = {
        type: "text", name: "name",
        value: data.name, onChange: item.update,
        placeholder: actualLanguage.name
    }

    const priceProps = {
        type: "text", name: "price", inputMode: "decimal",
        value: data.price === 0 ? "" : data.price,
        onChange: handleChange,
        placeholder: actualLanguage.price
    }

    const quantityProps = {
        type: "text", name: "quantity", inputMode: "decimal",
        value: data.quantity === 0 ? "" : data.quantity,
        onChange: handleChange,
        placeholder: actualLanguage.quantity
    }

    return <form>
        <div>
            <input {...nameProps} />
            <input {...priceProps} />
            <input {...quantityProps} />
        </div>
        <Buttons />
    </form>
}
