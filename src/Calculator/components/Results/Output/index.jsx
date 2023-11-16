import {
    useToolKit
} from "@webx/toolkit"

import {
    Card
} from "@webx/components"

import CartSum from "./CartSum"
import UserChange from "./UserChange"

import languages from "./languages"


function Void () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="output">
        <h6>
            {actualLanguage.calc}
        </h6>
        <div className="output-void">
            <p>
                {actualLanguage.void} 0{toolkit.cartCalc.currency}
            </p>
        </div>
    </div>
}

function Calculations () {
    const toolkit = useToolKit()
    
    return <div className="output">
        <h6>
            {languages[toolkit.settings.language].calc}
        </h6>
        <Card>
            <CartSum />
            <UserChange />
        </Card>
    </div>
}

function Output() {
    const toolkit = useToolKit()

    return toolkit.cartCalc.list.length === 0 ? <Void /> : <Calculations />
}

export default Output