import { useContext } from "react";
import { useToolKit } from "@webx/toolkit";
import { Form } from "./Form";
import { Display } from "./Display";

import ItemContext from "../Context";

function Data() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    if (toolkit.cartCalc.targetProduct === properties.id) {
        return <Form />;
    }

    return <Display />;
}

export {
    Data, ItemContext
}
