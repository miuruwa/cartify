import {
    CardBlock,
    Tumbler,
    TextField
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import ColorSchemaChanger from "pages/Settings/components/ColorSchemaChanger"
import Headline from "pages/Settings/components/Headline"

export default function Global () {
    const toolkit = useToolKit()

    const TotalMode = () => {
        const setState = (state) => {
            toolkit.cartCalc.isTotalMode = state
        }

        return <Tumbler state={toolkit.cartCalc.isTotalMode}
            setState={setState}
        />
    }

    const CurrencyField = () => {
        const handleChange = (event) => {
            toolkit.cartCalc.currency = event.target.value
        }

        return <TextField
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
        <CardBlock className="settings-page">
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
      </CardBlock>
    </div>
}