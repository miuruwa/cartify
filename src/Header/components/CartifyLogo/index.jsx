import { useToolKit } from "@webx/toolkit"
import CartLogo from "@webx/icons/CartLogo"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    const buttonProps = {
        className: "header-button",
        title: languages[toolkit.settings.language],
        children: <CartLogo />
    }

    return <div  {...buttonProps} />
}