export const settings = {
    schema: localStorage.getItem("color-schema") || "auto",
    language: localStorage.getItem("language") || "unset",
    serviceWorker: JSON.parse(
        localStorage.getItem("service-worker")
    ) || false,
    windowWidth: document.body.clientWidth,
    windowHeight: document.body.clientHeight,
}

export function SettingsReducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "set-cache":
            newState.serviceWorker = action.state

            localStorage.setItem(
                "service-worker", 
                JSON.stringify(action.state)
            )

            break

        case "set-color-schema":
            newState.schema = action.state

            localStorage.setItem(
                "color-schema", 
                action.state
            )

            break

        case "set-language":
            newState.language = action.state

            localStorage.setItem(
                "language", 
                action.state
            )

            break

        case "set-client-width":
            newState.windowWidth = action.state

            break

        case "set-client-height":
            newState.windowHeight = action.state

            break

        default:
            throw Error(`Unknown action (${action.type})`)
    }

    return newState
}
