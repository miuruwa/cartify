import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import EditIcon from "@webx/icons/EditIcon";
import { useItem } from "../../../../Item";
import languages from "../../../../languages"


export default function Edit() {
    const toolkit = useToolKit()
    const item = useItem()

    const props = {
        onClick: () => {
            toolkit.cartCalc.targetProduct = item.product.id;
        },
        theme: "transparent",
        icon: <EditIcon />,
        alt: languages[toolkit.settings.language].edit
    };

    return <Button {...props} />;
}
