import {
    Fragment
} from "react"

import {
    useToolKit
} from "@webx/toolkit"


import languages from "../languages"
import Form from "./Form"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return toolkit.cartCalc.list.length === 0 ? (
        <Fragment />
    ) : (
        <div className="catalogue save">
            <h6>
                {actualLanguage.save.headline}
            </h6>
            <Form />
        </div>
    )
}