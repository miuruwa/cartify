import {
    useContext
} from "react"

import {
    XBlock, 
    XButton
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    ArrowBackIcon, 
    SettingsIcon,
    InfoIcon, 
    ContrastIcon, 
    PersonIcon
} from "Content/icons"

import {
    PageMountBlockContext
} from "Content/utils"

function Header () {
  const MainMountBlock = useContext(PageMountBlockContext)
  
  const buttonAction = () => {
      MainMountBlock.hide()
      setTimeout(() => {
          window.location.href=process.env.PUBLIC_URL
      }, 190)
  }

  return <div 
          className="settings-headline settings-block"
  >
      <XButton 
              accent="transparent" icon={<ArrowBackIcon/>} 
              hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
              onClick={buttonAction} 
      />
      Настройки
  </div>
}

function MenuButton (props) {
    const toolkit = useContext(ToolKitContext)

    const menuAction = () => {
        toolkit.settings.page = props.page
    }

    return <XButton
            accent="transparent" 
            icon={props.icon} 
            style={{width: "100%"}} 
            title={props.title}
            onClick={menuAction}
    />
}

export default function Menu() {
    return <div className="settings-menu">
        <Header />
        <XBlock className="settings-block">
            <MenuButton 
                    icon={<ContrastIcon/>}
                    title="Основные" 
                    page={1}
            />
            <MenuButton
                    icon={<SettingsIcon/>}
                    title="Дополнительное"
                    page={4}
            />
        </XBlock>
        <XBlock className="settings-block">
            <MenuButton 
                    icon={<InfoIcon/>} 
                    title="О программе" 
                    page={2}
            />
            <MenuButton 
                    icon={<PersonIcon/>} 
                    title="О разработчике" 
                    page={3}
            />
        </XBlock>
    </div>
}
