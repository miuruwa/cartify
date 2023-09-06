import {
    CardBlock
} from "@webx/forms"

import ShowSettingsButton from "./ShowSettingsButton"


function EnableOfflineCard() {
    return <div className="cart-calc-message">
        <h6>
            Ошибка выполнения задачи
        </h6>
        <CardBlock>
            <p>
                Данная функция работает только при включённом офлайн-режиме (т.е. есть кеш приложения)
            </p>
        </CardBlock>
        <ShowSettingsButton />
    </div>
}

export default EnableOfflineCard