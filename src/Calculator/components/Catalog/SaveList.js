import { useState } from "react";
import { useToolKit } from "@webx/toolkit";
import { Button, CardBlock } from "@webx/forms";
import AddIcon from "@webx/icons/AddIcon";

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
        <h6>
            Сохранить список
        </h6>
        <CardBlock>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="save-catalogue" value={name}
                    placeholder="Название списка" onChange={handleChange} />
                <label>
                    <Button theme="transparent" icon={<AddIcon />} />
                    <input type="submit" name="save-submit" value="Сохранить" />
                </label>
            </form>
        </CardBlock>
    </div>;
}

export default SaveList;