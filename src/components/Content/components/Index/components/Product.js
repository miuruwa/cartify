import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import XBlock, {XList} from "../../../../XBlock";
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
    price: this.props.product.price
  }

  productInfo = () => {
    return <>
      <div className="xraw">
        <div className="product-name">
          {this.state.name}
        </div>
        <div className="small">
          <div className="product-descr">
            {this.state.quantity} шт.
          </div>
          ×
          <div className="product-descr">
            <CurrencyRubleIcon />
            {this.state.price}
          </div>
          =
          <div className="product-descr">
            <CurrencyRubleIcon />
            {this.state.quantity * this.state.price}
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: "24px"}}>
        <div className="product-edit" style={{marginTop: "0px!important"}}>
        <XButton icon={<EditIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} onClick={() => {
          this.setState({editing: true});
        }} />
        <XButton icon={<CloseIcon />} hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} onClick={() => {
          this.props.toolkit.removeProduct(this.props.product.id);
        }} />
        </div>
      </div>
    </>
  }

  setName = (name) => { this.setState({ name: name }); };
  setQuantity = (quantity) => { this.setState({ quantity: parseInt(quantity) }); };
  setPrice = (price) => { this.setState({ price: parseFloat(price) }); };

  productEdit = () => {
    return <div style={{width: "100%"}}>
    <XField icon={<DriveFileRenameOutlineIcon />} field={this.state.name} flexlist={true} setField={this.setName}>
      Название товара
    </XField>

    <XList>
      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        <div className="product-edit">
          <XField icon={<ShoppingCartIcon />} flexlist={true} field={this.state.quantity} setField={this.setQuantity}>
            Кол-во
          </XField>
          шт.
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </div>
          <XField icon={<CurrencyRubleIcon />} flexlist={true} field={this.state.price} setField={this.setPrice}>
            Цена
          </XField>
        </div>
        <div className="product-edit">
        <XButton
          icon={<DoneIcon />}
          hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
          onClick={() => {
            this.props.toolkit.changeProduct(this.props.product.id, this.state.name, this.state.quantity, this.state.price)
            this.setState({editing: false})}} />
        <XButton
          icon={<CloseIcon />}
          hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
          onClick={() => {
            this.props.toolkit.removeProduct(this.props.product.id)}
            }/>
        </div>
      </div>
    </XList>
  </div>
  }

  render() {
    return <XBlock key={this.props.product.id}>
      <div className="product-edit product">
        {
          this.state.editing ? <this.productEdit /> : <this.productInfo />
        }
      </div>
    </XBlock>
  }
}
