import {
    useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import MultiplyIcon from "@webx/icons/MultiplyIcon"
import AddIcon from "@webx/icons/AddIcon"
import AddEmptyCard from "./ErrorCard"


function Multiply () {
    return <div className="add-product-separator">
        <MultiplyIcon />
    </div>
}

function AddButton () {
    return <label title="Добавить">
        <input type="submit" value="submit" />
        <Button theme="transparent" icon={<AddIcon />}/>
    </label>
}

function Target () {
    return <div className="add-product-status target">
        Чтобы добавить новый продукт, выйдите из режима редактирования.
    </div>
}

function Finish () {
    return <div className="add-product-status finish">
        Товар добавлен в список
    </div>
}

function Input (props) {
    const toolkit = useToolKit()

    const [data, setData] = useState({
        name: "",
        price: 0.0,
        quantity: 0.0
    })

    function handleChange (event) {
        const value = event.target.name === "name" ? (
            event.target.value
        ) : (
            parseFloat(event.target.value).toFixed(2)
        )

        setData(prev => (
            {
                ...prev,
                [event.target.name]: value
            }
        ))
    }

    const formProps = {
        className: "add-product-form",
        onSubmit: event => {
            const CHECK = data.name === "" || data.quantity === "" || data.price === ""
    
            if (CHECK) {
                return toolkit.card.show(<AddEmptyCard />)
            }
            
            toolkit.cartCalc.addProduct(data)
    
            props.updateForm()
    
            setData({
                name: "",
                price: 0.0,
                quantity: 0.0
            })
                
            event.preventDefault();
        }
    }
    
    const nameProps = {
        type: "text", name: "name",
        value: data.name, onChange: handleChange,
        placeholder: "название"
    }

    const priceProps = {
        type: "text", name: "price", inputMode: "decimal",
        value: data.price === "0" ? "" : data.price,
        onChange: handleChange,
        placeholder: "цена"
    }

    const quantityProps = {
        type: "text", name: "quantity", inputMode: "decimal",
        value: data.quantity === "0" ? "" : data.quantity,
        onChange: handleChange,
        placeholder: "кол-во"
    }

    return <form {...formProps}>
        <input {...nameProps} />
        <input {...priceProps} />
        <Multiply />
        <input {...quantityProps} />
        <AddButton />
    </form>
}

function Content () {
    const toolkit = useToolKit();
    
    const IS_CURRENT_TARGET = toolkit.cartCalc.targetProduct !== null
    const [added, setAdded] = useState(false);

    function updateForm () {
        setAdded(true)
        
        setTimeout(() => {
            setAdded(false)
        }, 500)
    }

    if (IS_CURRENT_TARGET) {
        return <Target />
    }

    if (added) {
        return <Finish />
    }

    return <Input updateForm={updateForm}/>
}

function Form () {
    return <div className="pin-block">
        <h6>
            Добавить продукт
        </h6>
        <Content />
    </div>
}

export default Form