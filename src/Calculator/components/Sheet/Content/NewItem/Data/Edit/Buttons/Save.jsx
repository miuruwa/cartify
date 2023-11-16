import { Button } from "@webx/components";
import DoneIcon from "@webx/icons/DoneIcon";


export default function Save() {
    const props = {
        theme: "transparent",
        icon: <DoneIcon />
    };

    return <label>
        <input type="submit" value="submit" />
        <Button {...props} />
    </label>
}
