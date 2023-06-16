export function TextField ({
    icon, currency, className,
    field, setField
}) {
    const getClassName = () => {
        const classList = []

        classList.push("x-text-field")

        if (icon) {
            classList.push("with-icon")
        }

        if (currency) {
            classList.push("with-currency")
        }

        if (field !== "") {
            classList.push("with-clear-button")
        }

        if (className) {
            classList.push(className)
        }

        return classList.join(" ")
    }

    const Icon = () => {
        if (icon) {
            return <div className="x-text-field-icon">
                {
                    icon
                }
            </div>
        }
    }

    const Input = () => {
        return <div className="x-text-field-input">

        </div>
    }

    const InputCurrency = () => {
        if (currency) {
            return <div className="x-text-field-currency">
                {
                    currency
                }
            </div>
        }
    }

    const ClearButton = () => {
        if (field !== "") {
            return <div className="x-text-field-clear-button">
    
            </div>
        }
    }
    
    return <div className={getClassName()}>
        <Icon />
        <Input />
        <InputCurrency />
        <ClearButton />
    </div>
}