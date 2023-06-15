import CloseIcon from "@mui/icons-material/Close"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"


export function CloseButton() {
    const toolkit = useToolKit()

    const closeAction = () => {
        toolkit.card.return({
            hideReason: "closed by close button",
        })
    }

    return <div
            className="card-close-wrapper"
    >
        <div
                className="card-close-button"
                onClick={closeAction}
        >
          <CloseIcon />
        </div>
      </div>
}
