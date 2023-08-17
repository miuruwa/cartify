import {
    useToolKit
} from "@web-cross-ui/toolkit"


export default function UserCash() {
    const toolkit = useToolKit()

    function handleChange (event) {
        toolkit.cartCalc.availableMoney = parseFloat(event.target.value)
    }

    return <form>
        <h1>
            Ваши наличные ({toolkit.cartCalc.currency})
        </h1>
        <input type="text" inputMode="numeric"
            name="userCache" onChange={handleChange}
            value={toolkit.cartCalc.availableMoney}
            placeholder="наличные"
        />
    </form>
}
