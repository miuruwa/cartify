import { useToolKit } from "@webx/toolkit";

import { Button } from "@webx/forms";
import AddIcon from "@webx/icons/AddIcon";

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <label title={actualLanguage.add}>
        <input type="submit" value="submit" />
        <Button theme="transparent" icon={<AddIcon />} />
    </label>
}
