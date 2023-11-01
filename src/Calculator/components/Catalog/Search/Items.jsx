import { 
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import ListNameItem from "./ListNameItem"
import Void from "./Void"


function Raw () {
    const toolkit = useToolKit()
    const list = toolkit.cartCalc.getNames()
    
    return list.length === 0 ? <Void /> : list.map(
        ListNameItem
    )
}

function Wrapped () {
    return <CardBlock>
        <Raw />
    </CardBlock>
}

function Items({card}) {

    return card ? <Wrapped /> : <Raw />
}

export default Items