import {
    Button,
    CardBlock
} from "@webx/forms"

import {
    useToolKit
} from "@webx/toolkit"

import CloseIcon from "@webx/icons/CloseIcon"
import EditIcon from "@webx/icons/EditIcon"

function OKButton () {
    const toolkit = useToolKit()

    function onClick () {
        toolkit.card.return()
    }
    
    return <Button 
        title="OK"
        theme="transparent"
        onClick={onClick}
    />
}

function Guide () {
    return <div className="cart-calc-message">
        <h6>
            Инструкция
        </h6>
        <CardBlock>
            ✦ Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите на кнопку "+"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы очистить список продуктов, нажмите на кнопку "· · ·" и в выпадающем меню нажмите "Очистить список"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы отредактировать продукт, нажмите на кнопку "<EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы убрать один продукт в списке, нажмите на кнопку "<CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />"
        </CardBlock>
        <OKButton />
    </div>
}

export default Guide;