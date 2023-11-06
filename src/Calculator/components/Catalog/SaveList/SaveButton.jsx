import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/forms";
import AddIcon from "@webx/icons/AddIcon";
import languages from "../languages";

export default function () {
    const toolkit = useToolKit();
    const actualLanguage = languages[toolkit.settings.language];

    return <label title={actualLanguage.save.action}>
        <Button theme="transparent" icon={<AddIcon />} />
        <input type="submit" name="save-submit" value={actualLanguage.save.action} />
    </label>;
}
