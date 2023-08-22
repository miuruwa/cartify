import {
    Button,
    CardBlock
} from "@webx/forms"

import {
    useToolKit
} from "@webx/toolkit"

export default function ErrorCard () {
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

    return <CardBlock className="cart-calc-message">
        <h6>
            Ошибка изменения продукта
        </h6>
        <p>
            Проверьте все поля ввода: в приложение нельзя добавлять продукты с пустыми значениями.
        </p>
        <OK />
    </CardBlock>
}