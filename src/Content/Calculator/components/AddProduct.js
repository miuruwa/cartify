import {
    useContext, useState
} from "react"

import { 
    XBlock,
    XField,
    XButton
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    AddIcon, 
    CloseIcon, 
    DriveFileRenameOutlineIcon
} from "Content/icons"

export default function AddProduct () {
    const toolkit = useContext(ToolKitContext)

    const [inputValue, setInputValue] = useState({
        added: false,
        name: "",
        price: "",
        quantity: ""
    })

    const {
        added, name, price, quantity
    } = inputValue
    

    const AddNewProduct = () => {
        document.activeElement.blur()

        if (
                // eslint-disable-next-line
                inputValue.name == 0 || 
                // eslint-disable-next-line
                inputValue.quantity == 0 || 
                // eslint-disable-next-line
                inputValue.price == 0
        ) {
            toolkit.card.show("add-product-error")
            return
        }

        toolkit.cartCalc.addProduct(inputValue)
        
        setInputValue({ 
            added: true,
            name: "",
            price: "",
            quantity: ""
        })

        setTimeout(() => {
            setInputValue(prev => ({
                ...prev, added: false
            }))
        }, 500)
    }

    const AddComplete = () => {
        return <div className="add-product-status">
            Товар добавлен в список
        </div>
    }

    const AddImpossible = () => {
        return <div className="add-product-status">
            Чтобы добавить новый продукт, выйдите из режима редактирования.
        </div>
    }

    const handleChange = (e) => {
        const {
            name, value
        } = e.target
        
        setInputValue(
          (prev) => ({
              ...prev,
              [name]: value,
          })
        )
    }

    const AddForm = () => {
        return <div className="add-product-form">
            <XField 
                    icon={<DriveFileRenameOutlineIcon />} 
                    key="name"
                    name="name"
                    fieldValue={toolkit.cartCalc.currency}
                    value={name}
                    onChange={handleChange}
                    placeholder="Название товара"
            />
            <XField
                    key="price"
                    name="price"
                    fieldValue={toolkit.cartCalc.currency}
                    value={price}
                    onChange={handleChange}
                    placeholder="Цена"
            />
            <div
                    className="add-product-separator"
            >
                <CloseIcon />
            </div>
            <XField
                    key="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                    placeholder="Кол-во"
            />
            <XButton
                    icon={<AddIcon />}
                    accent="white"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={AddNewProduct}
            />
        </div>
    }

    const AddContainer = () => {
        if (toolkit.cartCalc.targetProduct !== null) {
            return <AddImpossible />
        }

        if (added) {
            return <AddComplete />
        }
        
        return <AddForm />
    }

    return <XBlock className="product-info-wrapper">
        <AddContainer />
    </XBlock>
}