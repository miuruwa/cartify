import {
    useState
} from "react"

import { useToolKit } from "@webx/toolkit"

import ItemAPIContext from "./Base"
import EditError from "~/Cards/EditError"


export default function ItemContext (props) {
    const toolkit = useToolKit()

    const [item, setItem] = useState({
        ...props.item,
        removingStatus: false
    })

    function handleChange (newState) {
        const FAILED_CHECK_FOR_COMPLETE = newState.name === "" || isNaN(parseFloat(newState.quantity)) || isNaN(parseFloat(newState.price));

        if (FAILED_CHECK_FOR_COMPLETE) {
            toolkit.card.show(<EditError />);

            event.preventDefault();

            return;
        }

        setItem(newState)

        toolkit.cartCalc.changeProduct(
            item.id,
            newState.name,
            newState.quantity,
            newState.price
        )
        
        toolkit.cartCalc.targetProduct = null
    }

    function handleCancel () {
        setItem(prev => (
            {
                ...prev,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        ))
    }

    function handleRemove () {
        setItem(prev => ({
            ...prev,
            removingStatus: true
        }))
        setTimeout(
            () => toolkit.cartCalc.removeProduct(item.id),
            500
        )
    }

    const actions = {
        product: item,
        is_target: () => toolkit.cartCalc.targetProduct === item.id,
        update: handleChange, 
        cancel: handleCancel,
        remove: handleRemove
    }

    return <ItemAPIContext.Provider value={actions}>
        {props.children}
    </ItemAPIContext.Provider>
}