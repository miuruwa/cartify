import {SearchBlock, SaveList} from "../components/Catalog"
import Form from "../components/Form"
import Sheet from "../components/Sheet"
import Results from "../components/Results"

export function Template() {
    return <div className="calc">
            <div className="cart">
                <Form />
                <Sheet />
            </div>
            <div>
                <Results />
                <div className="catalogue">
                    <SearchBlock hide/>
                    <SaveList />
                </div>
            </div>
        </div>
}
