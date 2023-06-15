import "./stylesheet.scss"

import useCartCalcPartition from "utils/useCartCalcPartition"

import Calculator from "./Calculator"
import Settings from "./Settings"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

export default function Router () {
    useCartCalcPartition()

    return <BrowserRouter>
        <Routes>
            <Route path="/cart-calc/*" element={<Calculator />} />
            <Route exact path="/cart-calc/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
}