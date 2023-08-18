import {
    useState
} from "react";

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import Items from "./Items";


function Search() {
    const toolkit = useToolKit();
    const [query, setQuery] = useState("");
    const [list, setList] = useState(toolkit.cartCalc.getNames());

    function handleChange(event) {
        switch (event.target.name) {
            default:
                var queryList;
                setQuery(event.target.value);

                if (query === "") {
                    queryList = toolkit.cartCalc.getNames();
                }
                else {
                    queryList = toolkit.cartCalc.searchLists(query);
                }
                setList(queryList);
        }
    }
    return <div className="catalogue search">
        <h6>
            Каталог
        </h6>
        <form>
            <input type="text" placeholder="Найти список"
                value={query} onChange={handleChange} />
        </form>
        <Items list={list} />
    </div>;
}

export default Search;