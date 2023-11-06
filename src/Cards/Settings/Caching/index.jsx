import { useToolKit } from "@webx/toolkit"

import Tumbler from "./Tumbler"
import Button from "./Button"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <label>
        <p>
            {actualLanguage.tumbler}
        </p>
        <div className="settings-card-caching">
            <Tumbler />
            <Button />
        </div>
    </label>
}
