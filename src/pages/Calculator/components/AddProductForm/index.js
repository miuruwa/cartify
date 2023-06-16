import {
    useState
} from "react"

import { 
    CardBlock,
    TextField,
    Button
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    AddIcon, 
    CloseIcon, 
} from "icons/calculator/add-product-form"

import ErrorCard from "./ErrorCard"

import {
    StatusComplete,
    StatusImpossibleToAdd,
} from "./Status"

export default function AddProductForm () {
    const [
        added, setAdded
    ] = useState(false)

    const [
        name, setName
    ] = useState("")

    const [
        price, setPrice
    ] = useState("")

    const [
        quantity, setQuantity
    ] = useState("")

    const AddContainer = () => {
        const toolkit = useToolKit()
        
        if (toolkit.cartCalc.targetProduct !== null) {
            return <StatusImpossibleToAdd />
        }

        if (added) {
            return <StatusComplete />
        }

        const AddForm = () => {
            const addNewProduct = () => {
                document.activeElement.blur()
        
                if (
                        name === "" || 
                        quantity === "" || 
                        price === ""
                ) {
                    toolkit.card.show(<ErrorCard />)

                    return
                }
                
                toolkit.cartCalc.addProduct({
                    name: name,
                    price: parseFloat(price).toFixed(2),
                    quantity: parseFloat(quantity).toFixed(2)
                })
        
                setAdded(true)
                setPrice("")
                setName("")
                setQuantity("")
        
                setTimeout(() => {
                    setAdded(false)
                }, 500)
            }

            return <div className="add-product-form">
                <TextField
                        field={name}
                        setField={setName}
                        placeholder="Название товара"
                />
                <TextField
                        field={price}
                        setField={setPrice}
                        placeholder={`Цена (${toolkit.cartCalc.currency})`}
                />
                <div className="add-product-separator">
                    <CloseIcon />
                </div>
                <TextField
                        field={quantity}
                        setField={setQuantity}
                        placeholder="Кол-во"
                />
                <Button
                        icon={<AddIcon />}
                        theme="white"
                        onClick={addNewProduct}
                />
            </div>
        }
        
        return <AddForm />
    }

    return <CardBlock className="product-info-wrapper">
        <AddContainer />
    </CardBlock>
}