import { 
    useToolKit
} from "@web-cross-ui/utils/toolkit"

export default function UserChange() {
    const toolkit = useToolKit()

    const classList = ["total-class"]
    const change = toolkit.cartCalc.change

    var status = "Ваша сдача:"

    if (change < 0) {
        classList.push("change-alert")
        status = "Вам не хватает:"
    }

    return <>
        <div className={classList.join(" ")}>
            <p>
                {status}
            </p>
        </div>
        <div className={classList.join(" ")}>
            <p>
                {Math.abs(toolkit.cartCalc.change)} {toolkit.cartCalc.currency}
            </p>
        </div>
    </>
}
