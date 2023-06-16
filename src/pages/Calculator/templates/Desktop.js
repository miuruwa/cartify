import AddProductForm from "../components/AddProductForm"
import ProductList from "../components/ProductList"
import TotalPriceBlock from "../components/TotalPriceBlock"
import ButtonList from "../components/ButtonList"

export function Template() {
    return <>
        <div className="desktop calc">
            <div className="product-list">
                <AddProductForm />
                <ProductList />
            </div>
            <div className="total-data">
                <TotalPriceBlock />
                <ButtonList />
            </div>
        </div>
    </>
}
