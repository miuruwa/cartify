import {
    nanoid
} from "nanoid"

import { 
    useToolKit
} from "@web-cross-ui/toolkit"

import GreetingsMessage from "./components/GreetingsMessage"
import NotFoundMessage from "./components/NotFoundMessage"
import ConfirmMessage from "./components/ConfirmMessage"
import ConfirmMessageAll from "./components/ConfirmMessageAll"
import OnlyOnline from "./components/OnlyOnline"

const layoutArray = [
    {
        name: "hello",
        id: nanoid(),
        layout: GreetingsMessage,
    },
    {
        name: "confirm-deletion",
        id: nanoid(),
        layout: ConfirmMessage
    },
    {
        name: "confirm-deletion-all",
        id: nanoid(),
        layout: ConfirmMessageAll
    },
    {
        name: "only-online",
        id: nanoid(),
        layout: OnlyOnline
    },
]


export function Layout () {
    const toolkit = useToolKit()

    for (let index = 0; index < layoutArray.length; index++) {
        let element = layoutArray[index]

        if (element.name === toolkit.card.layout) {
            return new element.layout()
        }
    }
    
    return <NotFoundMessage/>
}

export function getCardType (layout) {
    for (let index = 0; index < layoutArray.length; index++) {
        if (layoutArray[index].name === layout) {
            return layoutArray[index].type || "article"
        }
    }

    return "article"
}