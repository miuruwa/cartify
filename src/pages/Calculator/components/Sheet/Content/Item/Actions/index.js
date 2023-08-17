import {
    useContext
} from "react";

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import {
    DataActions
} from "./DataActions";

import {
    FormActions
} from "./FormActions";

import ItemContext from "../Context";

export function Actions() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    if (toolkit.cartCalc.targetProduct === properties.id) {
        return <FormActions />;
    }

    return <DataActions />;
}
