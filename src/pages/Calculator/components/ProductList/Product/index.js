import {
    useState,
} from "react"

import {
    CardBlock,
    TextField
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    CloseIcon, 
    DoNotDisturbAltIcon, 
    // DragIndicatorIcon,
    DriveFileRenameOutlineIcon, 
    DoneIcon, 
    EditIcon
} from "icons/calculator/product-list/product"

import ActionButton from "./ActionButton"

import {
    StatusRemoveWarn,
    StatusProductRemoved
} from "./Status"

import ErrorCard from "./ErrorCard"

export default function Product ({
        product
}) {
    const toolkit = useToolKit()

    const [
        removed, setRemoved
    ] = useState(0)

    const [
        name, setName
    ] = useState(product.name)

    const [
        name_editing, setNameRaw
    ] = useState(product.name)

    const [
        quantity, setQuantity
    ] = useState(product.quantity)

    const [
        quantity_editing, setQuantityRaw
    ] = useState(product.quantity)

    const [
        price, setPrice
    ] = useState(product.price)

    const [
        price_editing, setPriceRaw
    ] = useState(product.price)

    const ItemContainer = () => {
        switch (removed) {
            case 1:
                return <StatusRemoveWarn />

            case 2: 
                return <StatusProductRemoved />

            default: 
                break
        }
        
        const ProductInfo = () => {
            // const DraggingButton = () => {
            //   return <Button
            //           className="dragging-button"
            //           theme="transparent"
            //           icon={<DragIndicatorIcon />}
            //   />
            // }

            const TotalProductPrice = () => {
                const response = quantity * price
                const fixedResponse = response.toFixed(2)
                const totalPrice = `${fixedResponse} ${toolkit.cartCalc.currency}`

                return <nobr>
                    {totalPrice}
                </nobr>
            }

            const selectCurrentID = () => {
                toolkit.cartCalc.targetProduct = product.id
            }
        
            const removeAction = () => {
                setRemoved(1)
        
                setTimeout(() => {
                    setRemoved(2)
                }, 1000)
        
                setTimeout(() => {
                    toolkit.cartCalc.removeProduct(product.id)
                }, 1100)
            }

            return <div className="product-item-info">
                <div className="product-item-info-name">
                    {name}
                </div>
                <div className="product-item-action-menu">
                    <ActionButton
                            icon={<EditIcon />}
                            onClick={selectCurrentID}
                    />
                    <ActionButton
                            icon={<CloseIcon />}
                            onClick={removeAction}
                    />
                </div>
                <div className="product-item-info-calculation">
                    <nobr>
                        {price}&nbsp;{toolkit.cartCalc.currency}
                    </nobr>
                    &nbsp;×&nbsp;
                    <nobr>
                        {quantity}&nbsp;шт.
                    </nobr>
                    &nbsp;=&nbsp;
                    <TotalProductPrice />
                </div>
            </div>
        }

        const ProductEdit = () => {
            const setNewData = () => {
                if (name_editing === "") {
                    toolkit.card.show(<ErrorCard code="название продукта" />)
                    return
                }
                
                if (quantity_editing === "") {
                    toolkit.card.show(<ErrorCard code="количество" />)
                    return
                }
                
                if (price_editing === "") {
                    toolkit.card.show(<ErrorCard code="цена" />)
                    return
                }
        
                setName(name_editing)
                setPrice(price_editing)
                setQuantity(quantity_editing)
                
                toolkit.cartCalc.changeProduct(
                    product.id, 
                    name_editing, 
                    parseFloat(quantity_editing).toFixed(2), 
                    parseFloat(price_editing).toFixed(2)
                )
        
                toolkit.cartCalc.targetProduct = null
            }
        
            const setOldData = () => {
                setNameRaw(name)
                setPriceRaw(price)
                setQuantityRaw(quantity)
        
                toolkit.cartCalc.targetProduct = null
            }

            return <div className="product-item-edit">
                <TextField 
                        icon={<DriveFileRenameOutlineIcon />} 
                        name="name_editing"
                        field={name_editing}
                        setField={setNameRaw}
                        placeholder="Название товара"       
                />
                <div className="product-item-action-menu">
                    <ActionButton
                            icon={<DoneIcon />}
                            onClick={setNewData}
                    />

                    <ActionButton
                            icon={<DoNotDisturbAltIcon />}
                            onClick={setOldData}
                    />
                </div>
                <TextField
                        field={price_editing}
                        setField={setPriceRaw}
                        placeholder={`Цена (${toolkit.cartCalc.currency})`}
                />

                <div className="x-separator">
                    <CloseIcon />
                </div>
                
                <TextField
                        field={quantity_editing}
                        setField={setQuantityRaw}
                        placeholder="Кол-во"
                />
            </div>
        }

        // Данный продукт сейчас редактируется
        if (toolkit.cartCalc.targetProduct === product.id) {
          return <ProductEdit />
        }

        // item данного продукта лишь информирует
        return <ProductInfo />
    }

    const classList = ["product-item"]

    switch (toolkit.cartCalc.targetProduct) {
        case null: 
            if (removed !== 0) {
                classList.push("hidden")
            }
            break

        case product.id: 
            classList.push("editing")
            break

        default:
            break
    }

    if ("hidden" in classList && removed === 2) {
        classList.push("removed")
    }

    return <div className="product-wrap">
        <CardBlock className={classList.join(" ")}>
            {/* <DraggingButton /> */}
            <ItemContainer />
        </CardBlock>
    </div>
}