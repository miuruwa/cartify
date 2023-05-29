import React from "react";

/* WEB-X-UI components */

import { AddProduct } from "./components/AddProduct";
import { ProductList } from "./components/ProductList";
import { InTotalBlock } from "./components/InTotalBlock";
import { XVertical, XList } from "../../../XBlock";
import { XButton } from "../../../XForms";

class Content extends React.Component {
    PCTemplate = () => {
      return <XList 
          xstyle={{maxWidth: "1024px", margin: "auto"}}
          sx={[{flex: "1 1 auto", maxWidth: "640px"}, {flex: "1 1 auto", maxWidth: "376px"}]}>
        <XVertical>
          <AddProduct toolkit={this.props.toolkit}/>
          <ProductList toolkit={this.props.toolkit}/>
        </XVertical>
        <XVertical>
          <InTotalBlock toolkit={this.props.toolkit}/>
          <XButton title="Очистить список" style={{width: "100%"}} onClick={
            () => {
              this.props.toolkit.clearList();
              this.props.toolkit.returnCardResponse(null)
            }
          }/>
        </XVertical>
      </XList>
    }

    UsualTemplate = () => {
      return <XVertical>
          <AddProduct toolkit={this.props.toolkit}/>
          <ProductList toolkit={this.props.toolkit}/>
          <InTotalBlock toolkit={this.props.toolkit}/>
        </XVertical>
    }

    render () {
      if (document.body.clientWidth >= 1024) {
        return this.PCTemplate()
      }
      return this.UsualTemplate()
    }
}

export default Content;