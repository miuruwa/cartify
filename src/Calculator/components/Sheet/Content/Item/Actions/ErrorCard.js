import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    CardBlock
} from "@webx/forms"


function OKButton() {
    const toolkit = useToolKit()

    const props = {
        title: "ОК",
        onClick: toolkit.card.return
    }

    return <Button {...props} />
}

function ChangeItemCard () {
    return <CardBlock className="cart-calc-message">
        <h6>
            Ошибка изменения продукта
        </h6>
        <p>
            Проверьте все поля ввода: в приложение нельзя добавлять продукты с пустыми значениями.
        </p>
        <OKButton />
    </CardBlock>
}

export default ChangeItemCard