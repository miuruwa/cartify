import {
    nanoid
} from "nanoid"

export class Partition {
    #state
    #dispatch
    #toolkit
    
    constructor(state, dispatch, toolkit) {
        this.#state = state
        this.#dispatch = dispatch
        this.#toolkit = toolkit

        this.pages = {
            settings: {

            }
        }

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

            catalogue: {
                get: () => this.#state.catalogue,

                set: (value) => {
                    if (typeof value == "object" && Array.isArray(value)) {
                        this.#dispatch({
                            type: "save-list",
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

            totalCost: {
                get: () => {
                    const priceArray = this.list.map(
                        item => item.quantity * item.price
                    )
            
                    const reducedArray = priceArray.reduce(
                        (a, b) => a + b, 0
                    )
            
                    return parseFloat(reducedArray).toFixed(2)
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
                    const changeRaw = this.availableMoney - this.totalCost
                    const change = parseFloat(changeRaw).toFixed(2)

                    if (isNaN(change)) {
                        return 0
                    }

                    return change
                },
            }
        })
    }

    addProduct (product) {
        let productList = [{
            name: product.name,
            id: nanoid(),
            quantity: product.quantity,
            price: product.price
        }, ...this.list]

        this.list = productList
    }

    removeProduct (productID) {
        const productIndex = this.list.findIndex(
            productItem => productItem.id === productID
        )

        this.list = this.list.toSpliced(productIndex, 1)
    }

    changeProduct (productID, name=null, quantity=null, price=null) {
        const productIndex = this.list.findIndex(
            productItem => productItem.id === productID
        )

        const newProductItem = {
            ...this.list[productIndex],
            name: name,
            quantity: quantity,
            price: price,
        }

        this.list = this.list.toSpliced(productIndex, 1, newProductItem)
    }

    saveList (listName) {
        const newCatalogue = [...this.catalogue]
        const index = newCatalogue.findIndex(
            list => list.name === listName
        )
        const newList = {
            name: listName,
            list: [...this.list]
        }

        if (index === -1) {
            newCatalogue.push(newList)
        }

        else {
            newCatalogue.splice(index, 1, newList)
        }

        this.catalogue=newCatalogue
    }

    removeList (listName) {
        const newCatalogue = [...this.catalogue]
        const index = newCatalogue.findIndex(
            list => list.name === listName
        )

        if (index === -1) {
            return
        }

        else {
            newCatalogue.splice(index, 1)
        }

        this.catalogue=newCatalogue
    }

    searchLists (query) {
        const names = this.getNames()
        return names.filter(name => name.includes(query))
    }

    openList (listName) {
        for (let index = 0; index < this.catalogue.length; index++) {
            const element = this.catalogue[index];

            if (element.name === listName) {
                this.list = element.list;
                break;
            }
        }
    }

    getNames () {
        return this.catalogue.map(item => item.name)
    }
}