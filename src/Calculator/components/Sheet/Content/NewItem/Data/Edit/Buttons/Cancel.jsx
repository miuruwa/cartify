import { Button } from "@webx/components";
import CloseIcon from "@webx/icons/CloseIcon";
import { useToolKit } from "@webx/toolkit";
import { useItem } from "../../../Item";


export default function Cancel() {
    const toolkit = useToolKit()
    
    const item = useItem();
    const props = {
        onClick: () => {
            item.cancel()
            toolkit.cartCalc.targetProduct = null
        },
        theme: "transparent",
        icon: <CloseIcon />
    };

    return <Button {...props} />;
}
