import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    CardBlock
} from "@webx/forms"
import React from "react"


function OKButton() {
    const toolkit = useToolKit()

    const props = {
        title: "ОК",
        theme: "white",
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <Button {...props} />
}

function ChangeItemCard () {
    return <div className="cartify-message">
        <h6>
            Ошибка изменения продукта
        </h6>
        <CardBlock>
            <p>
                Проверьте все поля ввода: в приложение нельзя добавлять продукты с пустыми значениями.
            </p>
        </CardBlock>
        <OKButton />
    </div>
}

export default ChangeItemCard