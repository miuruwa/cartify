import { Button } from "@webx/forms";
import Search from "./Search"
import { useToolKit } from "@webx/toolkit";

function SearchCardButton() {
    const toolkit = useToolKit();

    function onClick () {
        toolkit.card.show(<div className="content-wrap">
            <Search card/>
        </div>)
    }
    return <div className="catalogue search">
        <h6>
            Каталог
        </h6>
        <Button title="Показать сохранённые" theme="white" onClick={onClick} />
    </div>
}

export default SearchCardButton;