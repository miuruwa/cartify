import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import Search from "./Search"


function ShowSavedButton () {
    const toolkit = useToolKit()

    const Card = <div className="content-wrap">
        <Search card/>
    </div>

    const props = {
        theme: "white",
        title: "Показать сохранённые списки",
        onClick: () => {
            toolkit.card.show(Card)
        }
    }

    return <Button {...props} />
}
function SearchCardButton() {
    return <div className="catalogue search">
        <h6>
            Каталог
        </h6>
        <ShowSavedButton />
    </div>
}

export default SearchCardButton