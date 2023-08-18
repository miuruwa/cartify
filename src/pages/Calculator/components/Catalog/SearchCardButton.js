import { Button } from "@web-cross-ui/forms";
import Search from "./Search"
import { useToolKit } from "@web-cross-ui/toolkit";

function SearchCardButton() {
    const toolkit = useToolKit();

    function onClick () {
        toolkit.card.show(<Search />)
    }
    return <div className="catalogue search">
        <h6>
            Каталог
        </h6>
        <Button title="Показать сохранённые" onClick={onClick} />
    </div>
}

export default SearchCardButton;