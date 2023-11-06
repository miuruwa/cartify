import { useToolKit } from "@webx/toolkit";
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = language[toolkit.settings.language]

    return <div className="add-product-status finish">
        {actualLanguage.done}
    </div>;
}
