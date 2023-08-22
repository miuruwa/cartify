import {
    CardBlock
} from "@webx/forms";

function AppInfo() {
    return <>
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
    </>;
}

export default AppInfo