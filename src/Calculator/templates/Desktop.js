import {SearchBlock, SaveList} from "../components/Catalog"
import Cart from "../components/Cart"
import Results from "../components/Results"

export function Template() {
    return <div className="calc">
            <div className="catalogue-wrap">
                <SearchBlock />
            </div>
            <Cart />
            <div className="results-wrap">
                <Results />
                <SaveList />
            </div>
        </div>
}
