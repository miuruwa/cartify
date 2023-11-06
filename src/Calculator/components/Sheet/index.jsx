import { useToolKit } from "@webx/toolkit";

import {
    Content
} from "./Content";

import "./stylesheet.scss"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    return <div className="sheet">
        <h6>
            {languages[toolkit.settings.language]}
        </h6>
        <Content />
    </div>
}