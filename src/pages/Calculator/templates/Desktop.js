import AddProductForm from "../components/AddProductForm"
import ProductList from "../components/ProductList"
import TotalPriceBlock from "../components/TotalPriceBlock"
import ButtonList from "../components/ButtonList"
import Headline from "../components/Headline"

export function Template() {
    return <>
        <Headline />
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
