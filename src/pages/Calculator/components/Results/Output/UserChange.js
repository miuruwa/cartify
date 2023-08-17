import { 
    useToolKit
} from "@web-cross-ui/toolkit"

export default function UserChange() {
    const toolkit = useToolKit()

    const classList = ["total-class"]
    const change = toolkit.cartCalc.change

    var status = "Ваша сдача:"

    if (change < 0) {
        classList.push("change-alert")
        status = "Вам не хватает:"
    }

    const text = `${Math.abs(toolkit.cartCalc.change)} ${toolkit.cartCalc.currency}`

    return <>
        <div className={classList.join(" ")}>
            <p>
                {status}
            </p>
        </div>
        <div className={classList.join(" ")}>
            <p>
                {text}
            </p>
        </div>
    </>
}
