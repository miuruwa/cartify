import { useState } from "react";

import { useToolKit } from "@webx/toolkit";

import AddError from "~/Cards/AddError";

import Multiply from "./Multiply";
import AddButton from "./AddButton";
import languages from "./languages"


export default function Input(props) {
    const toolkit = useToolKit();
    const actualLanguage = languages[toolkit.settings.language]

    const [data, setData] = useState({
        name: "",
        price: 0.0,
        quantity: 0.0
    });

    function handleChange(event) {
        setData(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ));
    }

    const formProps = {
        className: "add-product-form",
        onSubmit: event => {
            const FAILED_CHECK_FOR_COMPLETE = data.name === "" || isNaN(parseFloat(data.quantity)) || isNaN(parseFloat(data.price));

            if (FAILED_CHECK_FOR_COMPLETE) {
                toolkit.card.show(<AddError />);

                event.preventDefault();

                return;
            }

            toolkit.cartCalc.addProduct(data);

            props.updateForm();

            setData({
                name: "",
                price: 0.0,
                quantity: 0.0
            });

            event.preventDefault();
        }
    };

    const nameProps = {
        type: "text", name: "name",
        value: data.name, onChange: handleChange,
        placeholder: actualLanguage.name
    };

    const priceProps = {
        type: "text", name: "price", inputMode: "decimal",
        value: data.price === 0 ? "" : data.price,
        onChange: handleChange,
        placeholder: actualLanguage.price
    };

    const quantityProps = {
        type: "text", name: "quantity", inputMode: "decimal",
        value: data.quantity === 0 ? "" : data.quantity,
        onChange: handleChange,
        placeholder: actualLanguage.quantity
    };

    return <form {...formProps}>
        <input {...nameProps} />
        <input {...priceProps} />
        <Multiply />
        <input {...quantityProps} />
        <AddButton />
    </form>;
}
