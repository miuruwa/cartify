import {
    SearchBlock, SaveList
} from "../../components/Catalog"
import Cart from "../../components/Cart"
import Results from "../../components/Results"


export function Template() {
    return <div className="calc">
        <Cart />
        <div className="content-wrap">
            <Results />
            <SaveList />
            <SearchBlock hide/>
        </div>
    </div>
}
