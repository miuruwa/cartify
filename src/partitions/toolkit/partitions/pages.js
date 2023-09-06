export class Partition {
    #state
    #dispatch
    #toolkit
    
    constructor(state, dispatch, toolkit) {
        this.#state = state
        this.#dispatch = dispatch
        this.#toolkit = toolkit

        this.settings = {}

        Object.defineProperties(this.settings, {
            mounted: {
                get: () => this.#state.settings.mounted,
                set: value => {
                    const response = {
                        type: "set-page-mount",
                        page: "settings",
                        state: value
                    }

                    const check = typeof value == "boolean"

                    if (check) {
                        this.#dispatch(response)
                    }
                }
            },
            loaded: {
                get: () => this.#state.settings.loaded,
                set: value => {
                    const response = {
                        type: "set-page-visiblity",
                        page: "settings",
                        state: value
                    }
                    
                    const check = typeof value == "boolean"

                    if (check) {
                        this.#dispatch(response)
                    }
                }
            },
            number: {
                get: () => this.#state.settings.number,
                set: value => {
                    const response = {
                        type: "set-page-number",
                        page: "settings",
                        state: value
                    }

                    const check = typeof value == "number" && value !== this.#state.settings.number

                    if (!check) {
                        return
                    }

                    this.settings.loaded = false

                    setTimeout(
                        () => {
                            this.#dispatch(response)
                            this.settings.loaded = true
                        }, 100
                    )
                }
            }
        })
    }
}