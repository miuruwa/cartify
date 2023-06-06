import React from "react";

/* WEB-X-UI components */

import { AddProduct } from "./components/AddProduct";
import { ProductList } from "./components/ProductList";
import { InTotalBlock } from "./components/InTotalBlock";
import { XVertical, XHorizontal } from "../../../XBlock";
import { XButton } from "../../../XForms";

import ClearAllIcon from '@mui/icons-material/ClearAll';
// import QrCodeIcon from '@mui/icons-material/QrCode';

function DesktopTemplate (props) {
    let desktopSX = [
        {   
            flex: "1 1 auto",
            maxWidth: "640px"
        },
        {
            flex: "1 1 auto",
            maxWidth: "376px",
        }
    ]
    return <XHorizontal 
        className="index"
        xstyle={{maxWidth: "1024px", margin: "auto"}}
        sx={desktopSX}>
      <XVertical>
        <AddProduct toolkit={props.toolkit}/>
        <ProductList toolkit={props.toolkit}/>
      </XVertical>
      <XVertical>
        <InTotalBlock toolkit={props.toolkit}/>
        <XButton icon={<ClearAllIcon/>} title="Очистить список" style={{width: "100%"}} onClick={
          () => {
            props.toolkit.clearList();
            props.toolkit.returnCardResponse(null)
          }
        }/>
        {/* <XButton icon={<QrCodeIcon/>} title="Скопировать как QR" style={{width: "100%"}}/> */}
      </XVertical>
    </XHorizontal>
}

function MobileTemplate (props) {
  return <XVertical>
    <AddProduct toolkit={props.toolkit}/>
    <ProductList toolkit={props.toolkit}/>
    <InTotalBlock toolkit={props.toolkit}/>
  </XVertical>
}

export default function Index (props) {
    if (props.toolkit.windowSize.width >= 768) {
        return DesktopTemplate (props)
    }

    else {
        return MobileTemplate (props)
    }
}