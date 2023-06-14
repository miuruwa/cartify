import {
    useContext
} from "react"

import CloseIcon from "@mui/icons-material/Close"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"


export function CloseButton() {
    const toolkit = useContext(ToolKitContext)

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
