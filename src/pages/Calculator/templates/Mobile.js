import AddProductForm from "../components/AddProductForm"
import ProductList from "../components/ProductList"
import TotalPriceBlock from "../components/TotalPriceBlock"

export function Template() {
    return <div class="calc">
        <AddProductForm />
        <h1>
            Корзина
        </h1>
        <ProductList />
        <TotalPriceBlock />
    </div>
}
