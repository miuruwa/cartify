export class CardBehaviour {
  #state
  #dispatch
  
  constructor(state, dispatch) {
    this.#state = state
    this.#dispatch = dispatch

    Object.defineProperties(this, {
      mounted: {
        get: () => this.#state.mounted,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-mount",
              state: value
            })
          }
        }
      },
      loaded: {
        get: () => this.#state.loaded,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-visiblity",
              state: value
            })
          }
        }
      },
      layout: {
        get: () => this.#state.layout,
        set: (value) => {
          this.#dispatch({
            type: "set-layout",
            state: value
          })
        }
      },
      previous: {
        get: () => this.#state.previous,
        set: (value) => {
          this.#dispatch({
            type: "set-previous",
            state: value
          })
        }
      },
      offset: {
        get: () => this.#state.topOffset + "px",
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-top-offset",
              state: value
            })
          }
        }
      },
    })
  }

  return() {
    this.loaded = false

    window.scrollTo(window.scrollX, this.offset)

    setTimeout(() => {
      this.mounted = false
    }, 100)
  }

  show (layout) {
    let offset = 100

    if (this.mounted) {
      this.previous = this.layout
      this.return()
      offset += 200
    }

    setTimeout(() => {
      this.layout = layout
      this.offset = window.scrollY
      this.mounted = true
    }, offset)

    setTimeout(() => {
      this.loaded = true
    }, 100 + offset)
  }

  showPrevious (layout) {
    let previous = null
    let offset = 100

    if (this.mounted) {
      previous = this.layout
      this.return()
      offset += 200
    }

    setTimeout(() => {
      this.layout = this.previous
      this.previous = previous
      this.offset = window.scrollY
      this.mounted = true
    }, offset)

    setTimeout(() => {
      this.loaded = true
    }, 100 + offset)
  }
}
