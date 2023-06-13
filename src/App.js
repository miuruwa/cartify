import {
    useReducer
} from "react";

import "@web-cross-ui/forms/scss/stylesheet.scss";

import {
    getScreenDeviceType
} from "@web-cross-ui/utils";

import {
    ToolKit, ToolKitContext,
    card, CardReducer,
    settings, SettingsReducer
} from "@web-cross-ui/utils/toolkit"

import CardWrapper from "@web-cross-ui/card";

import {
    cartCalc, CartCalcReducer, 
    CartCalcBehaviour
} from "shared/tools"

import Content from "Content";

export default function App () {
    const [
        cardState, cardDispatch
    ] = useReducer(CardReducer, card)

    const [
        settingsState, settingsDispatch
    ] = useReducer(SettingsReducer, settings)

    const [
        cartCalcState, cartCalcDispatch
    ] = useReducer(CartCalcReducer, cartCalc)
    
    const toolkit = new ToolKit(
        cardState, cardDispatch,
        settingsState, settingsDispatch
    )

    toolkit.setProperty(
        "cartCalc", CartCalcBehaviour, cartCalcState, cartCalcDispatch
    )

    const layoutClassList = ["webx"]
    layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ");

    return <ToolKitContext.Provider value={toolkit}>
        <Content/>
        <CardWrapper/>
    </ToolKitContext.Provider>
}