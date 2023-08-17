import { useToolKit } from "@web-cross-ui/toolkit";
import { Void } from "./Void";
import { Products } from "./Products";

export function Content() {
    const toolkit = useToolKit();

    if (toolkit.cartCalc.list.length === 0) {
        return <Void />;
    }

    return <Products />;
}
