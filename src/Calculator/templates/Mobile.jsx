import {
    SearchBlock, SaveList
} from "../components/Catalog"
import Cart from "../components/Cart"
import Results from "../components/Results"


export function Template() {
    return <>
        <Cart />
        <div className="content-wrap">
            <Results />
            <div className="catalogue">
                <SearchBlock hide/>
                <SaveList />
            </div>
        </div>
    </>
}