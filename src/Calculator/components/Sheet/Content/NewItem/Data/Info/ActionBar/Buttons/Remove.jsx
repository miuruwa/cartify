import { Button } from "@webx/components";
import CloseIcon from "@webx/icons/CloseIcon";
import { useToolKit } from "@webx/toolkit";
import { useItem } from "../../../../Item";
import languages from "../../../../languages"


export default function Remove() {
    const toolkit = useToolKit()
    const item = useItem();

    const props = {
        onClick: item.remove,
        theme: "transparent",
        icon: <CloseIcon />,
        alt: languages[toolkit.settings.language].remove
    };

    return <Button {...props} />;
}
