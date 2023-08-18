import Catalog from "../components/Catalog"
import Form from "../components/Form"
import Sheet from "../components/Sheet"
import Results from "../components/Results"

export function Template() {
    return <>
        <Form />
        <Sheet />
        <Catalog hide/>
        <Results />
    </>
}
