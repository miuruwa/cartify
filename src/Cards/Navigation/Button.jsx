import { useToolKit } from "@webx/toolkit"
import { Button } from "@webx/forms"

import data from "~/Header/Navigation/data"


export default function ({ icon, title, action }) {
    const toolkit = useToolKit()

    const buttonProps = {
        icon: icon,
        title: data.languages[title],
        theme: "transparent",
        onClick: () => {
            action(toolkit)
        }
    }

    return <Button {...buttonProps} />
}
