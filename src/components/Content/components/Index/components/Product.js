import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import XBlock from "../../../../XBlock";
import { XButton } from "../../../../XForms";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

export class Product extends React.Component {
  render() {
    return <XBlock key={this.props.product.id}>
      <div className="product-edit product">
        <div className="xraw">
          <div className="product-name">
            {this.props.product.name}
          </div>
          <div className="small">
            <div className="product-descr">
              {this.props.product.quantity} шт.
            </div>
            ×
            <div className="product-descr">
              <CurrencyRubleIcon />
              {this.props.product.price}
            </div>
            =
            <div className="product-descr">
              <CurrencyRubleIcon />
              {this.props.product.quantity * this.props.product.price}
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "24px" }}>
          <XButton icon={<CloseIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} onClick={() => {
            this.props.toolkit.removeProduct(this.props.product.id);
          }} />
        </div>
      </div>
    </XBlock>
  }
}
