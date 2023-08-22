import {
    Button,
    CardBlock
} from "@webx/forms"

import { useToolKit } from "@webx/toolkit"

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

    return <div className="cart-calc-message">
        <h6>
            Ошибка добавления продукта
        </h6>
        <CardBlock>
            <p>
                В приложение нельзя добавлять продукты с пустыми значениями, проверьте все поля ввода.
            </p>
        </CardBlock>
        <OK />
    </div>
}