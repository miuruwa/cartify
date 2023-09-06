import {
    CardBlock
} from "@webx/forms"


function AppInfo() {
    return <div className="cart-calc-message">
        <h6>
            О приложении
        </h6>
        <CardBlock>
            <div className="options-grid-list">
                <div>
                    Название:
                </div>
                <div>
                    {process.env.REACT_APP_FULL_NAME}
                </div>
                <div>
                    Версия:
                </div>
                <div>
                    {process.env.REACT_APP_VERSION}
                </div>
            </div>
        </CardBlock>
    </div>
}

export default AppInfo