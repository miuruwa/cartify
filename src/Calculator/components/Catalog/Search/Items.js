import ListNameItem from "./ListNameItem";
import { useToolKit } from "@webx/toolkit";
import { Void } from "./Void";
import { CardBlock } from "@webx/forms";


function Items({card}) {
    const toolkit = useToolKit();
    const list = toolkit.cartCalc.getNames();

    function Content () {
        return list.length === 0 ? <Void /> : list.map(
            ListNameItem
        )
    }

    return card ? <CardBlock>
        <Content />
    </CardBlock> : <Content />
}

export default Items;