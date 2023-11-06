import { Button } from "@webx/forms";
import AddIcon from "@webx/icons/AddIcon";

export default function () {
    return <label title="Добавить">
        <input type="submit" value="submit" />
        <Button theme="transparent" icon={<AddIcon />} />
    </label>;
}
