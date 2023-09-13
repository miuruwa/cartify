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
        theme: "white",
        onClick: toolkit.card.return
    }

    return <Button {...props} />
}

function AddEmptyCard () {
    return <div className="cart-calc-message">
        <h6>
            Ошибка добавления продукта
        </h6>
        <CardBlock>
            <p>
                В приложение нельзя добавлять продукты с пустыми значениями, проверьте все поля ввода.
            </p>
        </CardBlock>
        <OKButton />
    </div>
}

export default AddEmptyCard