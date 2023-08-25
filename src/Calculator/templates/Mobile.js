import {SearchBlock, SaveList} from "../components/Catalog"
import Cart from "../components/Cart"
import Results from "../components/Results"

export function Template() {
    return <>
        <Cart />
        <Results />
        <div className="catalogue">
            <SearchBlock hide/>
            <SaveList />
        </div>
    </>
}
