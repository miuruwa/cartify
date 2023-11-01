import {
    CardBlock
} from "@webx/forms"


function AppInfo() {
    return <div className="cartify-message">
        <h6>
            О приложении
        </h6>
        <CardBlock>
            <div className="options-grid-list">
                <div>
                    Название:
                </div>
                <div>
                    Cartify
                </div>
                <div>
                    Версия:
                </div>
                <div>
                    2.5.1
                </div>
            </div>
        </CardBlock>
    </div>
}

export default AppInfo