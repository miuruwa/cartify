import { 
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


function UserChange() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        className: toolkit.cartCalc.change > 0 ? "total-class" : "total-class change-alert"
    }

    function ChangeStatus () {
        return <div {...props}>
            <p>
                {toolkit.cartCalc.change > 0 ? actualLanguage.change.able : actualLanguage.change.disabled}
            </p>
        </div>
    }

    function ChangeValue () {
        return <div {...props}>
            <p>
                {toolkit.cartCalc.wrapMoney(Math.abs(toolkit.cartCalc.change))}
            </p>
        </div>
    }

    return <>
        <ChangeStatus />
        <ChangeValue />
    </>
}

export default UserChange