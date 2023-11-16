import { useToolKit } from "@webx/toolkit"

import {Label } from "@webx/components"

import Tumbler from "./Tumbler"
import Button from "./Button"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <Label>
            {actualLanguage.tumbler}
        </Label>
        <div className="settings-card-caching">
            <Tumbler />
            <Button />
        </div>
    </>
}
