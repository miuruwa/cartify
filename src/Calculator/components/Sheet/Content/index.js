import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import Void from "./Void"
import Products from "./Products"
import Item from "./Item"
import React from "react"


function ItemWrap(props) {
    if (!props.content) {
        return <React.Fragment />
    }
    
    return <Item key={nanoid()} {...props.content} />
}

export function Content() {
    const toolkit = useToolKit()
    const props = {
        renderItem: content => <ItemWrap content={content}/>
    }

    if (toolkit.cartCalc.list.length === 0) {
        return <Void />
    }
    
    return <Products {...props} />
}
