import "@web-cross-ui/forms/scss/index.scss"

import {
    createContext,
    useContext,
    useReducer,
    useState
} from "react"

import {
    card, CardReducer,
    settings, SettingsReducer
} from "./reducers"

import {
    CardBehaviour,
    SettingsBehaviour
} from "./behaviours"

import {
    getScreenDeviceType
} from "../screen-device-type"

import {
    MountTransition
} from "@web-cross-ui/transitions"
import CardWrapper from "@web-cross-ui/card"

const getToolKitContext = createContext(null)

const createPartition = (state, dispatch, Behaviour) => {
    return new Behaviour(state, dispatch)
}

class ToolKit {
    #card
    #settings
    #toolDict

    constructor (cardPartition, settingsPartition) {
        this.#card = cardPartition
        this.#settings = settingsPartition
        this.#toolDict = {}

        Object.defineProperties(this, {
            card: {
                get: () => this.#card
            },

            settings: {
                get: () => this.#settings
            }
        })
    }

    setProperty (name, behaviour, state, dispatch) {
        this.#toolDict[name] = createPartition(state, dispatch, behaviour)
        
        Object.defineProperty(
            this, name, {
                get: () => this.#toolDict[name],
                configurable: true
            }
        )
    }

    get () {
        return {
            card: this.#card,
            settings: this.#settings,
            ...this.#toolDict
        }
    }
}

function Wrapper ({children}) {
    const [
        mount, setMount
    ] = useState(false)

    const [
        loaded, setLoaded
    ] = useState(false)

    const MountTransitionData = {
        show: (offset=100) => {
            setTimeout(
                () => {
                    MountTransitionData.mount = true
                }, offset
            )

            setTimeout(
                () => {
                    MountTransitionData.loaded = true
                }, offset + 100
            )
        },
        
        hide: (offset=100) => {
            setTimeout(
                () => {
                    MountTransitionData.loaded = false
                }, offset
            )

            setTimeout(
                () => {
                    MountTransitionData.mount = false
                }, offset + 100
            )
        }
    }

    Object.defineProperties(MountTransitionData, {
        mount: {
            get: () => mount,
            set: setMount
        },

        loaded: {
            get: () => loaded,
            set: setLoaded
        },
    })

    window.addEventListener('load', function () {
        MountTransitionData.show()
    })
    window.onbeforeunload = () => {
        MountTransitionData.hide()
    }

    return <MountTransition
        mountState={MountTransitionData.mount}
        visibilityState={MountTransitionData.loaded}
        className="index"
    >
        {
            children
        }
    </MountTransition>
}

function ToolKitContext ({children}) {
    const [
        cardState, cardDispatch
    ] = useReducer(CardReducer, card)

    const [
        settingsState, settingsDispatch
    ] = useReducer(SettingsReducer, settings)
    
    const cardPartition = createPartition(cardState, cardDispatch, CardBehaviour)
    const settingsPartition = createPartition(settingsState, settingsDispatch, SettingsBehaviour)

    const toolkit = new ToolKit(
        cardPartition, settingsPartition
    )

    const layoutClassList = ["webx"]
    layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ")
    
    return <getToolKitContext.Provider value={toolkit}>
        <Wrapper>
            {
                children
            }
        </Wrapper>
        <CardWrapper />
    </getToolKitContext.Provider>
}

function useToolKit() {
    return useContext(getToolKitContext)
}

export {
    ToolKitContext, useToolKit,
}