import {
    useToolKit
} from "@webx/toolkit"


function UserCash() {
    const toolkit = useToolKit()

    const inputProps = {
        type: "text", inputMode: "numeric",
        name: "userCache",
        value: toolkit.cartCalc.availableMoney,
        placeholder: "наличные",
        onChange: event => {
            toolkit.cartCalc.availableMoney = parseFloat(event.target.value)
        }
    }

    return <div className="user-cache">
        <h6>
            Ваши наличные ({toolkit.cartCalc.currency})
        </h6>
        <form>
            <input {...inputProps} />
        </form>
    </div>
}

export default UserCash