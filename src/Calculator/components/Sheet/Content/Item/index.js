import {
    useState
} from "react"

import {
    CardBlock
} from "@webx/forms"

import {
    Data
} from "./Data"

import Actions from "./Actions"
import ItemContext from "./Context"
import DragHandler from "./DragHandle"


function Item({item}) {
    const [data, setData] = useState({
        name: item.name,
        price: item.price,
        quantity: item.quantity
    })

    function handleChange (event) {
        setData(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ))
    }

    function handleCancel () {
        setData(prev => (
            {
                ...prev,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        ))
    }

    const properties = {
        id: item.id,
        data,
        handleChange, 
        handleCancel
    }

    return <ItemContext.Provider value={properties}>
        <CardBlock className="sheet-item">
            <DragHandler />
            <Data />
            <Actions />
        </CardBlock>
    </ItemContext.Provider>
}

export default Item