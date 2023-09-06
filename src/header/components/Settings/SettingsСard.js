import { 
    useState
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock
} from "@webx/forms"

import CacheApp from "./CacheApp"
import SaveCurrencyButton from "./SaveCurrencyButton"
import UpdateCacheButton from "./UpdateCacheButton"

function SettingsСard() {
    const toolkit = useToolKit();
    const [data, setData] = useState({
        currency: toolkit.cartCalc.currency
    })

    const inputProps = {
        type: "text",
        name: "currency",
        value: data.currency,
        onChange: event => setData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return <form className="cart-calc-message">
        <h6>
            Настройки
        </h6>
        <CardBlock>
            <label>
                Валюта
                <input {...inputProps} />
            </label>
            <label>
                Запускать offline
                <CacheApp />
            </label>
        </CardBlock>
        <UpdateCacheButton />
        <SaveCurrencyButton currency={data.currency} />
    </form>
}

export {
    SettingsСard
}