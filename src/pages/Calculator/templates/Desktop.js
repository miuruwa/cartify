import AddProductForm from "../components/Form"
import ProductList from "../components/ProductList"
import TotalPriceBlock from "../components/TotalPriceBlock"

export function Template() {
    return <>
        <div className="desktop calc">
            <div className="product-list">
                <div className="pin-block">
                    <h1>
                        Корзина
                    </h1>
                    <AddProductForm />
                </div>
                <ProductList />
            </div>
            <div className="total-data">
                <TotalPriceBlock />
            </div>
        </div>
    </>
}
