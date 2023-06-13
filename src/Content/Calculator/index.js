import {
  useContext
} from "react";

import {
  XButton
} from "@web-cross-ui/forms";

import {
  ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
  PageMountBlockContext
} from "Content/utils";

import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import InTotalBlock from "./components/InTotalBlock";

import {
    ClearAllIcon,
    SettingsIcon,
    // QrCodeIcon
} from "Content/icons"


const Headline = () => {
  const toolkit = useContext(ToolKitContext)

  if (toolkit.settings.header) {
      return <div className="cart-calc-headline">
          Калькулятор покупок
      </div>
  }
  else {
      return <></>
  }
}

function ButtonList () {
  const toolkit = useContext(ToolKitContext)
  const MainMountBlock = useContext(PageMountBlockContext)

  

  const SettingsButton = () => {
    const buttonAction = () => {
      MainMountBlock.hide()
      setTimeout(() => {
        window.location.href=process.env.PUBLIC_URL + "/settings/"
      }, 170)
    }

    return <XButton
        accent="transparent"
        icon={<SettingsIcon/>} title="Настройки" 
        onClick={buttonAction}
    />
  }

  const ClearList = () => {
    const buttonAction = () => {
      toolkit.cartCalc.clearList();
      toolkit.card.return(null)
    }

    return <XButton
        accent="transparent"
        icon={<ClearAllIcon/>} title="Очистить список" 
        onClick={buttonAction}
    />
  }
  // const ToggleMover = () => {
  //   const buttonAction = () => {}

  //   return <XButton
  //     accent="transparent"
  //     icon={<QrCodeIcon/>} title="Мувер ячеек" 
  //     onClick={buttonAction}
  // />
  // }
  // const ShareQR = () => {
  //   const buttonAction = () => {}

  //   return <XButton
  //     accent="transparent"
  //     icon={<QrCodeIcon/>} title="Скопировать как QR" 
  //     onClick={buttonAction}
  // />
  // }

  return <div className="x-block button-list">
    <ClearList />
    <SettingsButton />
    {/* <ToggleMover /> */}
    {/* <ShareQR /> */}
  </div>
}

function DesktopTemplate () {
  
  return <>
      <Headline />
      <div className="desktop">
        <div className="product-list">
          <AddProduct />
          <ProductList />
        </div>
        <div className="total-data">
          <InTotalBlock />
          <ButtonList />
        </div>
      </div>
  </>
}

function MobileTemplate () {
  return <>
    <AddProduct />
    <ProductList />
    <InTotalBlock />
    <ButtonList />
  </>
}

export default function Index () {
  const toolkit = useContext(ToolKitContext)

  if (toolkit.settings.windowWidth >= 768) {
      return <DesktopTemplate />
  }
  else {
      return <MobileTemplate />
  }
}