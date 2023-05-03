import React from "react";

/* WEB-X-UI components */

import XBlock from "../../../XBlock";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { AddProduct } from "./components/AddProduct";
import { ProductList } from "./components/ProductList";

function Credits(props) {
  return <div className="credits">
    <p>Калькулятор покупок</p>
    <p>kensoi 2023</p>
  </div>
}
export default function Index(props) {
    return <>
      <AddProduct toolkit={props.toolkit}/>
      <ProductList toolkit={props.toolkit}/>
      <XBlock>
        <div className="total-class">
          <div>
            Итого
          </div>
          <div>
            <CurrencyRubleIcon />  
            {parseFloat(props.toolkit.getTotalCost()).toFixed(2)}
          </div>
        </div>
      </XBlock>
      <Credits />
    </>
  }