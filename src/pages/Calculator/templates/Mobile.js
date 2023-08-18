import {SearchBlock, SaveList} from "../components/Catalog"
import Form from "../components/Form"
import Sheet from "../components/Sheet"
import Results from "../components/Results"

export function Template() {
    return <>
        <Form />
        <Sheet />
        <Results />
        <div className="catalogue">
            <SearchBlock hide/>
            <SaveList />
        </div>
    </>
}
