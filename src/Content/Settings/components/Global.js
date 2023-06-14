import {
    useContext
} from "react"

import {
    XBlock,
    XTumbler,
    XField
} from "@web-cross-ui/forms"

import { ToolKitContext } from "@web-cross-ui/utils/toolkit"

import ColorSchemaChanger from "./ColorSchemaChanger"
import Headline from "./Headline"

export default function Global () {
    const toolkit = useContext(ToolKitContext)

    const TotalMode = () => {
        const contexts = [
            {
                name: "ВЫКЛ.",
                context: false,
            },
            {
                name: "ВКЛ.",
                context: true,
            },
        ]

        const setState = (state) => {
            toolkit.cartCalc.isTotalMode = state
        }

        return <XTumbler
                tumbleConfig={contexts}
                context={toolkit.cartCalc.isTotalMode}
                setContext={setState}
        />
    }

    const CurrencyField = () => {
        const handleChange = (event) => {
            toolkit.cartCalc.currency = event.target.value
        }

        return <XField
                name="currency"
                key="name"
                type="text"
                value={toolkit.cartCalc.currency}
                onChange={handleChange}
                placeholder="валюта"
        />
    }

    return <div className="settings-wrapper">
        <Headline title="Основные" />
        <XBlock className="settings-page">
        <div className="options-grid-list settings-block">
            <div className="options-grid-item">
                Цветовая схема
            </div>
            <div className="options-grid-item">
                <ColorSchemaChanger align="right" />
            </div>
            <div className="options-grid-item">
                Включить подсчёт сдачи
            </div>
            <div className="options-grid-item">
                <TotalMode />
            </div>
            <div className="options-grid-item">
                Валюта покупки
            </div>
            <div className="options-grid-item">
                <CurrencyField />
            </div>
        </div>
      </XBlock>
    </div>
}