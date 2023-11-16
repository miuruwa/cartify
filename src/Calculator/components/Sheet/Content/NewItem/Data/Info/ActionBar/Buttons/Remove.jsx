import { Button } from "@webx/components";
import CloseIcon from "@webx/icons/CloseIcon";
import { useItem } from "../../../../Item";

export default function Remove() {
    const item = useItem();
    const props = {
        onClick: item.remove,
        theme: "transparent",
        icon: <CloseIcon />
    };

    return <Button {...props} />;
}
