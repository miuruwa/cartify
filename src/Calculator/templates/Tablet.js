import {SearchBlock, SaveList} from "../components/Catalog"
import Cart from "../components/Cart"
import Results from "../components/Results"

export function Template() {
    return <div className="calc">
            <Cart />
            <div>
                <Results />
                <div className="catalogue">
                    <SearchBlock hide/>
                    <SaveList />
                </div>
            </div>
        </div>
}
