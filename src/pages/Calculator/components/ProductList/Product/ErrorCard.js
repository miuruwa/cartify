import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button,
    CardBlock
} from "@web-cross-ui/forms"

export default function ErrorCard ({code}) {
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
        <p>
            Поле "{code}" должно быть заполнено
        </p>
        <OK />
    </CardBlock>
}