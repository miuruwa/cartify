import {
    useState
} from "react"
import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    AddIcon,
    CloseIcon, 
} from "icons/calculator/add-product-form"

import ErrorCard from "./ErrorCard"

function Target () {
    return <div
        className="add-product-status target"
    >
        Чтобы добавить новый продукт, выйдите из режима редактирования.
    </div>
}
function Finish () {
    return <div
        className="add-product-status finish"
    >
        Товар добавлен в список
    </div>
}

function Input ({updateForm}) {
    const toolkit = useToolKit();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0.0);

    function handleChange (event) {
        switch (event.target.name) {
            case "price":
                setPrice(event.target.value)
                break;

            case "quantity":
                setQuantity(event.target.value)
                break;
            
            default:
                setName(event.target.value)
        }
    }

    function handleSubmit (event) {
        if (
                name === "" || 
                quantity === "" || 
                price === ""
        ) {
            toolkit.card.show(<ErrorCard />)
        }
        else {
            toolkit.cartCalc.addProduct({
                name: name,
                price: parseFloat(price).toFixed(2),
                quantity: parseFloat(quantity).toFixed(2)
            })
            updateForm()
            setPrice("")
            setName("")
            setQuantity("")
        }

        event.preventDefault();
    }

    return <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" name="name"
            value={name} onChange={handleChange}
            placeholder="название"
        />
        <input type="text" inputMode="decimal" name="price"
            value={price === 0 ? "" : price} onChange={handleChange}
            placeholder="цена"
        />
        <div className="add-product-separator">
            <CloseIcon />
        </div>
        <input type="text" inputMode="decimal" name="quantity"
        value={quantity === 0 ? "" : quantity} onChange={handleChange}
            placeholder="кол-во"
        />
        <label>
            <input type="submit" value="submit" />
            <AddIcon />
        </label>
    </form>
}

function Content () {
    const toolkit = useToolKit();

    const [added, setAdded] = useState(false);

    function updateForm () {
        setAdded(true)
        
        setTimeout(() => {
            setAdded(false)
        }, 500)
    }

    if (toolkit.cartCalc.targetProduct !== null) {
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


export default Form;
