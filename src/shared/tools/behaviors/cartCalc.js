import {nanoid} from "nanoid";

export class CartCalcBehaviour {
  #state
  #dispatch
  #card
  #settings
  
  constructor(state, dispatch, card, settings) {
    this.#state = state;
    this.#dispatch = dispatch
    this.#card = card
    this.#settings = settings

    Object.defineProperties(this, {
      list: {
        get: () => this.#state.productList,
        set: (value) => {
          if (typeof value == "object" && Array.isArray(value)) {
            this.#dispatch({
              type: "update-list",
              state: value
            })
          }
        }
      },
      isTotalMode: {
        get: () => this.#state.inTotalMode,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-total-mode",
              state: value
            })
          }
        }
      },
      currency: {
        get: () => this.#state.currency,
        set: (value) => {
          if (typeof value == "string") {
            this.#dispatch({
              type: "set-currency",
              state: value
            })
          }
        }
      },
      availableMoney: {
        get: () => {
          if (isNaN(this.#state.availableMoney)) {
            return ""
          }
          return this.#state.availableMoney
        },
        set: (value) => {
          this.#dispatch({
            type: "set-available-money",
            state: parseInt(value)
          })
        }
      },
      targetProduct: {
        get: () => this.#state.selectedProduct,
        set: (value) => {
          this.#dispatch({
            type: "select-product",
            state: value
          })
        }
      },
      change: {
        get: () => {
          let change = this.availableMoney - this.getTotalCost();
          let change2 = parseFloat(change).toFixed(2)

          if (isNaN(change2)) {
            return 0
          }
          return change2
        },
      }
    })
  }

  addProduct (product) {
    console.log(product)
    let productList = [{
      name: product.name,
      id: nanoid(),
      quantity: product.quantity,
      price: product.price
    }, ...this.list]

    this.list = productList
    console.log(this.list)
  }

  removeProduct (productID) {
    this.list = this.list.filter(product => product.id !== productID)
  }

  changeProduct (productID, name=null, quantity=null, price=null) {
    this.list = this.list.map(
      item => {
        if (item.id !== productID) {
          return item
        }
        item.name = name
        item.quantity = quantity
        item.price = price
        
        return item
      })
  }

  getTotalCost () {
    return this.list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
  }

  clearList () {
    this.list = []
  }
}