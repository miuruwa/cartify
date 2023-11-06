import { ButtonBlock } from "@webx/forms"
import { useToolKit } from "@webx/toolkit"
import ButtonList from "./ButtonList"
import data from "./data"

import "./stylesheet.scss"

export default function () {
    const toolkit = useToolKit()

    return <div className="navigation-card">
        <h3>
            {data.label[toolkit.settings.language].name}
        </h3>
        <ButtonBlock>
            <ButtonList />
        </ButtonBlock>
    </div>
}