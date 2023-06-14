export const cartCalc = {
    productList: JSON.parse(localStorage.getItem("product-list")) || [],
    inTotalMode: localStorage.getItem("inTotalMode") === "true" || false,
    currency: JSON.parse(localStorage.getItem("valuta")) || "руб.",
    availableMoney: JSON.parse(localStorage.getItem("available-money")) || 0,
    selectedProduct: null,
}

export function CartCalcReducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "update-list":
            newState.productList = action.state
            localStorage.setItem("product-list", JSON.stringify(action.state))
            break
        
        case "set-total-mode":
            newState.inTotalMode = action.state
            localStorage.setItem("inTotalMode", JSON.stringify(action.state))
            break
        
        case "set-currency":
            newState.currency = action.state
            localStorage.setItem("valuta", JSON.stringify(action.state))
            break

        case "set-available-money":
            newState.availableMoney = action.state
            localStorage.setItem("available-money", JSON.stringify(action.state))
            break

        case "select-product":
            newState.selectedProduct = action.state
            break

        default:
            throw Error('Unknown action.')
    }

    return newState
}
