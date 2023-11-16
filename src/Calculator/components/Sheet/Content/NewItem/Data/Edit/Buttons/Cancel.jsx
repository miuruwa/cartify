import { Button } from "@webx/components";
import CloseIcon from "@webx/icons/CloseIcon";
import { useToolKit } from "@webx/toolkit";
import { useItem } from "../../../Item";
import languages from "../../../languages"


export default function Cancel() {
    const toolkit = useToolKit()
    
    const item = useItem();
    const props = {
        onClick: () => {
            item.cancel()
            toolkit.cartCalc.targetProduct = null
        },
        theme: "transparent",
        icon: <CloseIcon />,
        alt: languages[toolkit.settings.language].remove
    };

    return <Button {...props} />;
}
