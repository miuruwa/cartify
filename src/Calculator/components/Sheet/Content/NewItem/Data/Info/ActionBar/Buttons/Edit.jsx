import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import EditIcon from "@webx/icons/EditIcon";
import { useItem } from "../../../../Item";


export default function Edit() {
    const toolkit = useToolKit()
    const item = useItem()

    const props = {
        onClick: () => {
            toolkit.cartCalc.targetProduct = item.product.id;
        },
        theme: "transparent",
        icon: <EditIcon />
    };

    return <Button {...props} />;
}
