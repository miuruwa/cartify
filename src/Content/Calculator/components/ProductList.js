import {
    useContext
} from "react"

import {
    nanoid
} from "nanoid"

import {
    XBlock
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    AddIcon, 
    EditIcon, 
    CloseIcon
} from "Content/icons"

import Product from "./Product"

export default function ProductList () {
    const toolkit = useContext(ToolKitContext)
    
    const NotFound = () => {
        return <XBlock className="product-not-found">
            <h3>
                Инструкции к использованию:
            </h3>
            <p>
                ✦ Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите на кнопку"<AddIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
            </p>
            <p>
                ✦ Чтобы включить режим подсчитывания сдачи, зайдите в настройки
            </p>
            <p>
                ✦ Чтобы очистить список продуктов, нажмите на клавишу "Очистить список" под блоком с итоговой суммой.
            </p>
            <p>
                ✦ Чтобы отредактировать продукт, нажмите на кнопку "<EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
            </p>
            <p>
                ✦ Чтобы убрать один продукт в списке, нажмите на кнопку "<CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
            </p>
            <br />
        </XBlock>
    }

    if (toolkit.cartCalc.list.length === 0) {
      return <NotFound />
    }

    return toolkit.cartCalc.list.map(
        (item, index) => <Product 
            key={nanoid() || index}
            product={item}
        />
    )
}
