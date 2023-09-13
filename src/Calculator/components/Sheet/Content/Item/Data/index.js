import { 
    useContext
} from "react"

import Form from "./Form"
import Display from "./Display"
import ItemAPIContext from "../Context"


function Data() {
    const itemAPI = useContext(ItemAPIContext)

    return itemAPI.is_target() ? <Form /> : <Display />
}

export {
    Data, ItemAPIContext as ItemContext
}
