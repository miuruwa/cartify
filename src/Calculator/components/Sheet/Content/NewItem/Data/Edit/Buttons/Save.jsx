import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import DoneIcon from "@webx/icons/DoneIcon";
import { useItem } from "../../../Item";


export default function Save() {
    const toolkit = useToolKit()
    const item = useItem()

    const props = {
        onClick: () => {
            toolkit.cartCalc.targetProduct = item.product.id;
        },
        theme: "transparent",
        icon: <DoneIcon />
    };

    return <Button {...props} />;
}
