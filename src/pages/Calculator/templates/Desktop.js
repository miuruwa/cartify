import Form from "../components/Form"
import Sheet from "../components/Sheet"
import Results from "../components/Results"

export function Template() {
    return <div className="desktop calc">
            <div className="cart">
                <Form />
                <Sheet />
            </div>
            <div className="total-data">
                <Results />
            </div>
        </div>
}
