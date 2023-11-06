import { useState } from "react";
import { useToolKit } from "@webx/toolkit";
import languages from "../languages";
import SaveButton from "./SaveButton";

export default function () {
    const toolkit = useToolKit();
    const actualLanguage = languages[toolkit.settings.language];

    const [name, setName] = useState("");

    function handleSubmit(event) {
        toolkit.cartCalc.saveList(name);
        setName("");
        event.preventDefault();
    }

    const inputProps = {
        type: "text", name: "save-catalogue", value: name,
        placeholder: actualLanguage.save.name,
        onChange: event => setName(event.target.value)
    };

    return <form onSubmit={handleSubmit}>
        <input {...inputProps} />
        <SaveButton />
    </form>;
}
