import AddProductForm from "../components/NewAddProductForm"
import ProductList from "../components/ProductList"
import TotalPriceBlock from "../components/TotalPriceBlock"

export function Template() {
    return <>
        <div className="pin-block">
            <h1>
                Корзина
            </h1>
            <AddProductForm />
        </div>
        <ProductList />
        <TotalPriceBlock />
    </>
}
