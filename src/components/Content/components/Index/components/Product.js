import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import XBlock, {XVertical} from "../../../../XBlock";
import { XButton, XField } from "../../../../XForms";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

export class Product extends React.Component {
  state = {
    editing: false,
    name: this.props.product.name,
    quantity: this.props.product.quantity,
    price: this.props.product.price,
    name_editing: this.props.product.name,
    quantity_editing: this.props.product.quantity,
    price_editing: this.props.product.price
  }

  getTotalProductPrice = () => {
    let price = this.state.quantity * this.state.price;
    return price.toFixed(2)
  }

  productInfo = () => {
    return <>
      <div className="product-edit product">
        <div className="xraw">
          <div className="product-name">
            {this.state.name}
          </div>
          <div className="small">
            <div className="product-descr">
              <CurrencyRubleIcon />
              {this.state.price}
            </div>
            ×&nbsp;
            <div className="product-descr">
              {this.state.quantity} шт.
            </div>
            =
            <div className="product-descr">
              <CurrencyRubleIcon />
              {this.getTotalProductPrice()}
            </div>
          </div>
        </div>
        <div className="product-options">
          <div className="product-edit">
            <XButton icon={<EditIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} onClick={() => {
              this.props.toolkit.setSelectedProduct(this.props.product.id);
            }} />
            <XButton icon={<CloseIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} onClick={() => {
              this.props.toolkit.removeProduct(this.props.product.id);
            }} />
          </div>
        </div>
      </div>
    </>
  }

  setName = (name) => { this.setState({ name_editing: name }); };
  setQuantity = (quantity) => { this.setState({ quantity_editing: parseInt(quantity) }); };
  setPrice = (price) => { this.setState({ price_editing: parseFloat(price) }); };
  setNewData = () => {
    this.setState({
      name: this.state.name_editing,
      quantity: this.state.quantity_editing,
      price: this.state.price_editing,
    })
    this.props.toolkit.setSelectedProduct(null);
  };
  setOldData = () => {
    this.setState({
      name_editing: this.state.name,
      quantity_editing: this.state.quantity,
      price_editing: this.state.price,
      editing: false,
    })
    this.props.toolkit.setSelectedProduct(null);
  };

  productEdit = () => {
    return <XVertical>
    <div className="product-edit">
      <XField icon={<DriveFileRenameOutlineIcon />} field={this.state.name_editing} flexlist={true} setField={this.setName}>
        Название товара
      </XField>
      <XButton
        icon={<DoNotDisturbAltIcon />}
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={() => {
          this.setOldData();}} />
    </div>
    <div className="product-edit">
      <XField icon={<CurrencyRubleIcon />} flexlist={true} field={this.state.price_editing} setField={this.setPrice}>
        Цена
      </XField>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <CloseIcon />
      </div>
      <XField icon={<ShoppingCartIcon />} flexlist={true} field={this.state.quantity_editing} setField={this.setQuantity}>
        Кол-во
      </XField>
      <XButton
        icon={<DoneIcon />}
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={() => {
          this.props.toolkit.changeProduct(this.props.product.id, this.state.name_editing, this.state.quantity_editing, this.state.price_editing)
          this.setNewData();}} />
    </div>
  </XVertical>
  }

  render() {
    return <XBlock key={this.props.product.id}>
        {
          this.props.toolkit.selectedProduct === this.props.product.id ? <this.productEdit /> : <this.productInfo />
        }
    </XBlock>
  }
}
