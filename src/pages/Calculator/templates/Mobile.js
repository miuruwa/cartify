import AddProductForm from "../components/Form"
import Sheet from "../components/Sheet"
import TotalPriceBlock from "../components/TotalPriceBlock"

export function Template() {
    return <>
        <div className="pin-block">
            <h1>
                Корзина
            </h1>
            <AddProductForm />
        </div>
        <Sheet />
        <TotalPriceBlock />
    </>
}
