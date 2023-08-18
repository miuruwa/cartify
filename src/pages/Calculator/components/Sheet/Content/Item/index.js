import {
    useState
} from "react";

import {
    CardBlock
} from "@web-cross-ui/forms";

import {
    Actions
} from "./Actions";

import {
    Data
} from "./Data";

import ItemContext from "./Context";
import { DragHandler } from "./DragHandle";

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
            <DragHandler />
            <Data />
            <Actions />
        </CardBlock>
    </ItemContext.Provider>
}

export default Item;