import {
    CardBlock
} from "@web-cross-ui/forms"

import {
    AddIcon,
    EditIcon,
    CloseIcon
} from "icons/calculator/product-list/not-found"

export default function NotFound () {
    return <CardBlock className="product-not-found">
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
    </CardBlock>
}