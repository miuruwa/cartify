import {
    Button,
    CardBlock
} from "@web-cross-ui/forms"

import { useToolKit } from "@web-cross-ui/toolkit"

import {
    EditIcon,
    CloseIcon
} from "icons/calculator/product-list/not-found"

import {
    AddIcon,
} from "icons/calculator/add-product-form"
import MenuIcon from "icons/header/menuIcon"

export default function Guide () {
    const toolkit = useToolKit()

    const OK = () => {
        const action = () => {
            toolkit.card.return()
        }

        return <Button 
            title="OK"
            onClick={action}
        />
    }

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
        <br />
        <OK />
        <br />
    </div>
}