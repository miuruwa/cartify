import {
    createContext
} from "react";

import {
    CardBehaviour,
    SettingsBehaviour
} from "./behaviours"

import {
    card, CardReducer,
    settings, SettingsReducer
} from "./reducers"

const ToolKitContext = createContext({})

class ToolKit {
    #card
    #settings
    #toolDict

    constructor (
        cardState, cardDispatch,
        settingsState, settingsDispatch
    ) {
        this.#card = new CardBehaviour(cardState, cardDispatch)
        this.#settings = new SettingsBehaviour(settingsState, settingsDispatch) 
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
        this.#toolDict[name] = new behaviour(state, dispatch, this.#card, this.#settings)
        
        Object.defineProperty(
            this, name, {
                get: () => this.#toolDict[name]
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

export {
    ToolKitContext, ToolKit,
    card, CardReducer,
    settings, SettingsReducer
}