import { nanoid } from "nanoid"

import data from "~/Header/Menu/data"
import Button from "./Button"


export default function () {
    return data.map(
        item => <Button key={nanoid()} {...item} />
    )
}
