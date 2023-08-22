import SaveList from "./SaveList";
import Search from "./Search";
import SearchCardButton from "./SearchCardButton";

function SearchBlock ({hide}) {
    return hide ? <SearchCardButton /> : <Search />
}

export {
    SearchBlock, SaveList
};