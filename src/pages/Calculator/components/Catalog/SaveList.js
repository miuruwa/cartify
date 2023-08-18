import { useState } from "react";
import { useToolKit } from "@web-cross-ui/toolkit";
import { Button } from "@web-cross-ui/forms";

function SaveList() {
    const toolkit = useToolKit();
    const [name, setName] = useState("");

    function handleChange(event) {
        switch (event.target.name) {
            default:
                setName(event.target.value);
        }
    }

    function handleSubmit(event) {
        toolkit.cartCalc.saveList(name);
        setName("");
        event.preventDefault();
    }

    if (toolkit.cartCalc.list.length === 0) {
        return <>
        </>
    }
    
    return <div className="catalogue save">
        <form onSubmit={handleSubmit}>
            <h6>
                Сохранить список
            </h6>
            <input
                type="text" name="save-catalogue" value={name}
                placeholder="Название списка" onChange={handleChange} />
            <label>
                <Button theme="white" title="Сохранить"/>
                <input type="submit" name="save-submit" value="Сохранить" />
            </label>
        </form>
    </div>;
}

export default SaveList;