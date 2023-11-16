import { Button } from "@webx/components";
import DoneIcon from "@webx/icons/DoneIcon";
import languages from "../../../languages"
import { useToolKit } from "@webx/toolkit";


export default function Save() {
    const toolkit = useToolKit()

    const props = {
        theme: "transparent",
        icon: <DoneIcon />,
    };

    return <label title={languages[toolkit.settings.language].save}>
        <input type="submit" value="submit" />
        <Button {...props} />
    </label>
}
