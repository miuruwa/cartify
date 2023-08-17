import { createContext, useContext, useState} from "react";
import { useToolKit } from "@web-cross-ui/toolkit";
import { CardBlock } from "@web-cross-ui/forms";
import ActionButton from "./ActionButton";

import ErrorCard from "./ErrorCard";
import {
    CloseIcon, 
    // DoNotDisturbAltIcon, 
    // DragIndicatorIcon,
    DriveFileRenameOutlineIcon, 
    DoneIcon, 
    // EditIcon
} from "icons/calculator/product-list/product"

const ItemContext = createContext("");

function Form () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function Equal () {
        return <>
            =&nbsp;
        </>
    }
    
    function Cost () {
        const cost = properties.quantity * properties.price

        return <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
        </nobr>
    }

    return <form>
        <div className="sheet-item-form">
            <input type="text" name="name"
                value={properties.name} onChange={properties.handleChange}
                placeholder="название"
            />
            <input type="text" inputMode="numeric" name="price"
                value={properties.price === 0 ? "" : properties.price} onChange={properties.handleChange}
                placeholder="цена"
            />
            <div className="sheet-item-separator">
                <CloseIcon />
            </div>
            <input type="text" inputMode="numeric" name="quantity"
            value={properties.quantity === 0 ? "" : properties.quantity} onChange={properties.handleChange}
                placeholder="кол-во"
            />
            <div className="sheet-item-form-cost">
                <Equal/>
                <Cost/>
            </div>
        </div>
    </form>
}

function Display () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);


    function Price () {
        return <nobr>
            {properties.price}&nbsp;{toolkit.cartCalc.currency}
        </nobr>
    }

    function Quantity () {
        return <nobr>
            {properties.quantity}&nbsp;шт.
        </nobr>
    }
    
    function Cost () {
        const cost = properties.quantity * properties.price

        return <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
        </nobr>
    }

    function Multiple () {
        return <>
            &nbsp;×&nbsp;
        </>
    }

    function Equal () {
        return <>
            &nbsp;=&nbsp;
        </>
    }
    
    return <div className="sheet-item-data">
        <div className="sheet-item-name">
            {properties.name}
        </div>
        <div className="sheet-item-calculation">
            <Price />
            <Multiple />
            <Quantity />
            <Equal />
            <Cost />
        </div>
    </div>
}

function Data () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    if (toolkit.cartCalc.targetProduct === properties.id) {
        return <Form />
      }

      return <Display />
}   

function FormActions () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function ApplyChanges () {
        if (
                properties.name === "" || 
                properties.quantity === "" || 
                properties.price === ""
        ) {
            toolkit.card.show(<ErrorCard />)
        }
        else {
            toolkit.cartCalc.changeProduct(
                properties.id, 
                properties.name, 
                parseFloat(properties.quantity).toFixed(2), 
                parseFloat(properties.price).toFixed(2)
            )

            toolkit.cartCalc.targetProduct = null
        }
    }

    function CancelChanges () {
        properties.handleCancel()
        toolkit.cartCalc.targetProduct = null
    }

    return <div className="sheet-item-actions">
        <ActionButton
            icon={<DoneIcon />}
            onClick={ApplyChanges}
        />
        <ActionButton
            icon={<CloseIcon />}
            onClick={CancelChanges}
        />
    </div>
}

function DataActions () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function ChangeData () {
        toolkit.cartCalc.targetProduct = properties.id
    }

    function RemoveData () {
        toolkit.cartCalc.removeProduct(properties.id)
    }

    return <div className="sheet-item-actions">
        <ActionButton
            icon={<DriveFileRenameOutlineIcon />}
            onClick={ChangeData}
        />
        <ActionButton
            icon={<CloseIcon />}
            onClick={RemoveData}
        />
    </div>
}

function Actions () {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    if (toolkit.cartCalc.targetProduct === properties.id) {
        return <FormActions />
      }

      return <DataActions />
}

function Item({item}) {
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [quantity, setQuantity] = useState(item.quantity);

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

    function handleCancel () {
        setName(item.name);
        setPrice(item.price);
        setQuantity(item.quantity);
    }
    const properties = {
        id: item.id,
        name: name, 
        price: price, 
        quantity: quantity, 
        handleChange: handleChange, 
        handleCancel: handleCancel
    }
    return <ItemContext.Provider value={properties}>
        <CardBlock className="sheet-item">
            <Data />
            <Actions />
        </CardBlock>
    </ItemContext.Provider>
}

export default Item;