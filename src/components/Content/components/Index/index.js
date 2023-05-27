import React from "react";

/* WEB-X-UI components */

import { AddProduct } from "./components/AddProduct";
import { ProductList } from "./components/ProductList";
import { InTotalBlock } from "./components/InTotalBlock";

export default function Index(props) {
    return <>
      <AddProduct toolkit={props.toolkit}/>
      <ProductList toolkit={props.toolkit}/>
      <InTotalBlock toolkit={props.toolkit}/>
    </>
}