import { useToolKit } from "@webx/toolkit"

import {
    Card, Content
} from "@webx/components"

import CloseIcon from "@webx/icons/CloseIcon"
import EditIcon from "@webx/icons/EditIcon"
import Options from "./Options"

import languages from "./languages"
import "./stylesheet.scss"


function Guide () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]

    const MenuButton = "· · ·"
    const EditButton = <EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />
    const CloseButton = <CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />
    
    return <div className="guide-card">
        <h3>
            {actualLanguage.headline}
        </h3>
        <Card>
            <Content>
                <p>
                    {actualLanguage.tipLi} {actualLanguage.data[0]} "+"
                </p>
                <p>
                    {actualLanguage.tipLi} {actualLanguage.data[1][0]} "{MenuButton}" {actualLanguage.data[1][1]} "{actualLanguage.data[1][2]}"
                </p>
                <p>
                    {actualLanguage.tipLi} {actualLanguage.data[2]} "{EditButton}"
                </p>
                <p>
                    {actualLanguage.tipLi} {actualLanguage.data[3]} "{CloseButton}"
                </p>
            </Content>
            <Options />
        </Card>
    </div>
}

export default Guide