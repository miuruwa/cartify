import "./stylesheet.scss"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import {
    Layout, 
    getCardType
} from "./Layout"

import {
    CloseButton
} from "./CloseButton"

function Card () {
    const toolkit = useToolKit()

    const offsetStyle = {
        top: toolkit.card.offset
    }

    const CardWrapperClassList = ["card-wrapper"]
    const CardClassList = ["card"]

    if (toolkit.card.loaded) {
        CardWrapperClassList.push("visible")
    }

    const type = getCardType(toolkit.card.layout)
    CardClassList.push(type)

    return <div
            className={CardWrapperClassList.join(" ")}
            style={offsetStyle}
    >
        <div
                className={CardClassList.join(" ")}
        >
            <CloseButton/>
            <div className="card-layout">
                <Layout />
            </div>
        </div>
    </div>
}

function CardWrapperBG () {
    const toolkit = useToolKit()

    const classList = ["card-wrapper-bg"]
    
    if (toolkit.card.loaded) {
        classList.push("visible")
    }

    const clickAction = () => {
        toolkit.card.return({
            hideReason: "closed by clicking on background wrapper",
          })
    }

    return <div
            className={classList.join(" ")}
            onClick={clickAction} 
    />
}

export default function CardWrapper () {
    return <>
        <CardWrapperBG />
        <Card />
    </>
}