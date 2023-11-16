import { useState } from "react";

import { useToolKit } from "@webx/toolkit";

import { useItem } from "../../Item"
import languages from "../../languages"
import Buttons from "./Buttons";
import MultiplyIcon from "@webx/icons/MultiplyIcon";


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

    function handleSubmit() {
        item.update(data)
    }

    const inputProps = {
        type: "text",
        onChange: handleChange,
    }

    const valueProps = {
        ...inputProps,
        inputMode: "decimal"
    }

    const nameProps = {
        ...inputProps,
        name: "name",
        value: data.name,
        placeholder: actualLanguage.name
    }

    const priceProps = {
        ...valueProps,
        name: "price",
        value: data.price,
        placeholder: actualLanguage.price
    }

    const quantityProps = {
        ...valueProps,
        name: "quantity",
        value: data.quantity,
        placeholder: actualLanguage.quantity
    }

    const summ = data.price * data.quantity

    return <form onSubmit={handleSubmit}>
        <div className="product-name-field">
            <input {...nameProps} />
            <Buttons />
        </div>
        <div className="product-summ-field">
            <input {...priceProps} />
            <MultiplyIcon />
            <input {...quantityProps} />
            <h4>
                &nbsp;=&nbsp;
                {toolkit.cartCalc.wrapMoney(summ)}
            </h4>
        </div>
    </form>
}
