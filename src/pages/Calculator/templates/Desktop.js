import Form from "../components/Form"
import Sheet from "../components/Sheet"
import TotalPriceBlock from "../components/TotalPriceBlock"

export function Template() {
    return <>
        <div className="desktop calc">
            <div className="cart">
                <Form />
                <Sheet />
            </div>
            <div className="total-data">
                <TotalPriceBlock />
            </div>
        </div>
    </>
}
