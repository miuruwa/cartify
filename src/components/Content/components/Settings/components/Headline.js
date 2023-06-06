import React from "react";
import { XHorizontal } from "../../../../XBlock";
import { XButton } from "../../../../XForms";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButtonMobile(props) {
  return <XButton icon={<ArrowBackIcon/>} 
    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    onClick={() => { props.toolkit.settings.setPage(0); }} />;
}
export function Headline(props) {
  if (props.toolkit.windowSize.width >= 768) {
    return <div className="settings-headline">{props.children}</div>;
  }

  else {
    return <XHorizontal>
      <BackButtonMobile toolkit={props.toolkit} />
      <div className="settings-headline">{props.children}</div>
    </XHorizontal>;
  }
}