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
        onClick={onClick}
    />
}

export default function Guide () {

    return <div className="cart-calc-message">
        <h6>
            Инструкция
        </h6>
        <CardBlock>
            <p>
                ✦ Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите на кнопку "+"
            </p>
            <p>
                ✦ Чтобы очистить список продуктов, нажмите на кнопку "· · ·" и в выпадающем меню нажмите "Очистить список"
            </p>
            <p>
                ✦ Чтобы отредактировать продукт, нажмите на кнопку "<EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
            </p>
            <p>
                ✦ Чтобы убрать один продукт в списке, нажмите на кнопку "<CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
            </p>
        </CardBlock>
        <OKButton />
    </div>
}