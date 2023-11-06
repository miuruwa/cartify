import UserCash from "./UserCash"
import Output from "./Output"

import "./stylesheet.scss"


function Results () {
    return <div className="results">
        <UserCash/>
        <Output />
    </div>
}

export default Results