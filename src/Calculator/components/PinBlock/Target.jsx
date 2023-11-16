import { useToolKit } from "@webx/toolkit";
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="add-product-status target">
        {actualLanguage.target}
    </div>
}
