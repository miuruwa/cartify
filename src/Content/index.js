import {
    useState
} from "react"

import {
    BrowserRouter, Routes, Route
} from "react-router-dom"

import {
    MountBlock
} from "@web-cross-ui/forms/"

import "./stylesheet.scss"
import Index from "./Calculator"
import Settings from "./Settings"

import { 
    PageMountBlockContext
} from "Content/utils"


export default function Content () {
    const [mount, setMount] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const MountBlockData = {
        show: (offset=100) => {
            setTimeout(
                () => {
                    MountBlockData.mount = true
                }, offset
            )

            setTimeout(
                () => {
                    MountBlockData.loaded = true
                }, offset + 100
            )
        },
        
        hide: (offset=100) => {
            setTimeout(
                () => {
                    MountBlockData.loaded = false
                }, offset
            )

            setTimeout(
                () => {
                    MountBlockData.mount = false
                }, offset + 100
            )
        }
    }

    Object.defineProperties(MountBlockData, {
        mount: {
            get: () => mount,
            set: setMount
        },

        loaded: {
            get: () => loaded,
            set: setLoaded
        },
    })

    MountBlockData.show()

    return <PageMountBlockContext.Provider
            value={MountBlockData}
    >
        <MountBlock
                mountState={MountBlockData.mount}
                visibilityState={MountBlockData.loaded}
                className="index"
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/cart-calc/*" element={<Index />} />
                    <Route exact path="/cart-calc/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </MountBlock>
    </PageMountBlockContext.Provider>
}