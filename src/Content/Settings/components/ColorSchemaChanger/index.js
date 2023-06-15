import {
    useContext
} from "react"

import {
    nanoid
} from "nanoid"

import {
    ButtonBlock,
    XButton,
    XDropdown
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    LightModeIcon, 
    NightlightIcon, 
    AutoAwesomeIcon,
    // TuneIcon
} from "Content/icons"

export default function ColorSchemaChanger (props) {
    const toolkit = useContext(ToolKitContext)

    const schemas = [
        {
            schemaName: "light",
            icon: <LightModeIcon />,
            title: "Светлая",
        },
        {
            schemaName: "dark",
            icon: <NightlightIcon />,
            title: "Тёмная",
        },
        {
            schemaName: "auto",
            icon: <AutoAwesomeIcon />,
            title: "Системная",
        },
        // {
        //     schemaName: "",
        //     icon: <TuneIcon />,
        //     title: "Название схемы",
        // },
    ]

    const getSchemaButton = (item) => {
        const icon = item["icon"]
        const title = item["title"]
        const ID = nanoid()

        if (item["x-dropdown"] !== undefined) {
            const dropdownContent = getDropdownContent(item["x-dropdown"])
            const contentPosition = props.contentPosition || "bottom-left"

            return <XDropdown
                    key={ID}
                    dropdown={dropdownContent}
                    contentPosition={contentPosition}
            >
                <XButton 
                        accent="transparent"
                        icon={icon}
                        title={title}
                />
            </XDropdown>
        }
        else {
            const action = () => {
                toolkit.settings.colorSchema = item.schemaName
            }

            return <XButton 
                    accent="transparent"
                    key={ID}
                    icon={icon}
                    onClick={action} 
                    title={title}
            />
        }
    }

    const getDropdownContent = (dropdown) => {
        return <ButtonBlock>
            {
                dropdown.map(getSchemaButton)
            }
        </ButtonBlock>
    }

    const actualSchema = schemas.filter(item => item.schemaName === toolkit.settings.colorSchema)[0] || "auto"
    const actualSchemaIcon = actualSchema.icon
    const actualSchemaTitle = actualSchema.title
    const dropdownContent = getDropdownContent(schemas)

    return <XDropdown
                dropdown={dropdownContent}
                contentPosition={props.contentPosition || "bottom-right"}
                listDirection="row"
        >
            <XButton 
                    accent="white" 
                    icon={actualSchemaIcon} 
                    title={actualSchemaTitle} 
                    isDropdown={true}
            />
        </XDropdown>
}
