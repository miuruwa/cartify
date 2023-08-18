import "./stylesheet.scss"

import useAppPartitions from "utils/useAppPartitions"

import Calculator from "./Calculator"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

export default function Router () {
    useAppPartitions()
    
    return <BrowserRouter>
        <Routes>
            <Route path="/cart-calc/*" element={<Calculator />} />
            {/* <Route exact path="/cart-calc/settings" element={<Settings />} /> */}
        </Routes>
    </BrowserRouter>
}