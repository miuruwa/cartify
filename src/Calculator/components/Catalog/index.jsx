import SaveList from "./SaveList"
import Search from "./Search"
import SearchCardButton from "./SearchCardButton"

import "./stylesheet.scss"


function SearchBlock ({hide}) {
    return hide ? <SearchCardButton /> : <Search />
}

export {
    SearchBlock, SaveList
}