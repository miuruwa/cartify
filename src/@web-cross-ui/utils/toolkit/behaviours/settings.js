export class SettingsBehaviour {
  #state
  #dispatch
  
  constructor(state, dispatch) {
    this.#state = state;
    this.#dispatch = dispatch

    Object.defineProperties(this, {
      selection: {
        get: () => {
          // get current selection
          let select = document.getSelection()
          console.log(select)

          return {
            focus: select.focusNode,
            start: select.anchorOffset,
            end: select.focusOffset
          }
        },
        set: (value) => { // range
          // set new selection
          let select = document.getSelection()
          let range = new Range();

          range.setStart(value.focus, value.start)
          range.setEnd(value.focus, value.end)

          select.removeAllRanges()
          select.addRange(value)
        }
      },
      targetInput: {
        get: () => this.#state.targetInput,
        set: (value) => {
          this.#dispatch({
            type: "target-input",
            state: value
          })
        }
      },
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
      page: {
        get: () => this.#state.page,
        set: (value) => {
          if (typeof value == "number") {
              var offset = 100;

              if (this.mounted) {
                offset += 100;
                this.loaded = false
                setTimeout(()=>{
                  this.mounted = false
                }, 100)
              }
    
              setTimeout(()=>{
                this.#dispatch({
                  type: "set-page",
                  state: value
                })
                this.mounted = true
              }, offset)
    
              setTimeout(()=>{
                this.loaded = true
              }, 100 + offset)
            
          }
        }
      },
      
      cacheApp: {
        get: () => this.#state.serviceWorker,
        set: (value) => {
          if (typeof value == "boolean") {
              this.#dispatch({
                type: "set-cache",
                state: value
              })
            
          }
        }
      },
      askBeforeRemoving: {
        get: () => this.#state.askBeforeRemoving,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-ask-before-remove",
              state: value
            })
          }
        }
      },

      header: {
        get: () => this.#state.header,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-header-state",
              state: value
            })
          }
        }
      },
      footer: {
        get: () => this.#state.footer,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-footer-state",
              state: value
            })
          }
        }
      },

      colorSchema: {
        get: () => this.#state.schema,
        set: (value) => {
          if (typeof value == "string") {
            this.#dispatch({
              type: "set-color-schema",
              state: value
            })
          }
        }
      },

      windowWidth: {
        get: () => this.#state.windowWidth,
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-client-width",
              state: value
            })
          }
        }
      },
      windowHeight: {
        get: () => this.#state.windowHeight,
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-client-height",
              state: value
            })
          }
        }
      },
    })
  }
}