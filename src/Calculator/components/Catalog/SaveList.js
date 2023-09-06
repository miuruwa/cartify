import {
    useState, Fragment
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"

import AddIcon from "@webx/icons/AddIcon"


function SaveButton () {
    return <label>
        <Button theme="transparent" icon={<AddIcon />} />
        <input type="submit" name="save-submit" value="Сохранить" />
    </label>
}

function Form () {
    const toolkit = useToolKit()
    
    const [name, setName] = useState("")

    function handleSubmit(event) {
        toolkit.cartCalc.saveList(name);
        setName("");
        event.preventDefault();
    }

    const inputProps = {
        type: "text", name: "save-catalogue", value: name,
        placeholder: "Название списка",
        onChange: event => setName(event.target.value)
    }

    return <form onSubmit={handleSubmit}>
        <input {...inputProps} />
        <SaveButton />
    </form>
}

function SaveList() {
    const toolkit = useToolKit()

    return toolkit.cartCalc.list.length === 0 ? (
        <Fragment />
    ) : (
        <div className="catalogue save">
            <h6>
                Сохранить список
            </h6>
            <Form />
        </div>
    )
}

export default SaveList