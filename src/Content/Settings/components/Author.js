import {
    XBlock, XButton
} from "@web-cross-ui/forms"

import Headline from "./Headline"

export default function Author () {
    const LinkButton = ({title, children, link}) => {
        const action = () => {
            window.open(link)
        }

        return <XButton
            accent="white"
            title={title || children}
            onClick={action}
        />
    }
    return <div className="settings-wrapper">
        <Headline title="О разработчике" />
        <XBlock className="settings-page">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    ВКонтакте:
                </div>
                <div className="options-grid-item">
                    <LinkButton link="https://vk.com/kensoi">
                        @kensoi  
                    </LinkButton>
                </div>
                <div className="options-grid-item">
                    Github:
                </div>
                <div className="options-grid-item">
                    <LinkButton href="https://githob.com/kensoi">
                        @kensoi  
                    </LinkButton>
                </div>
            </div>
        </XBlock>
    </div>
}