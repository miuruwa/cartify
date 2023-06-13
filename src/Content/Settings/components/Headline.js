import {
    useContext
} from "react";

import {
    ArrowBackIcon
} from 'Content/icons';

import {
    XButton
} from "@web-cross-ui/forms";

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"


function BackButtonMobile() {
  const toolkit = useContext(ToolKitContext)

  const returnToMenu = () => {
    toolkit.settings.page = 0
  }
  return <XButton 
    icon={<ArrowBackIcon/>} accent="transparent"
    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    onClick={returnToMenu} />
}

export default function Headline({ title }) {
  const toolkit = useContext(ToolKitContext)
  
  return <div className="settings-headline">
    {
      toolkit.settings.windowWidth < 768 ? <BackButtonMobile /> : <></>
    }
    { title }
  </div>
}
