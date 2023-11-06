import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


function UserCash() {
    const toolkit = useToolKit()

    const inputProps = {
        type: "text", inputMode: "numeric",
        name: "userCache",
        value: toolkit.cartCalc.availableMoney,
        placeholder: languages[toolkit.settings.language],
        onChange: event => {
            toolkit.cartCalc.availableMoney = parseFloat(event.target.value)
        }
    }

    return <div className="user-cache">
        <h6>
            {languages[toolkit.settings.language]} ({toolkit.cartCalc.currency})
        </h6>
        <form>
            <input {...inputProps} />
        </form>
    </div>
}

export default UserCash