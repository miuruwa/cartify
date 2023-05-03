import React from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import XBlock, { XList } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export class AddProduct extends React.Component {
  state = {
    name: "",
    quantity: 1,
    price: 0.0,
  };

  setName = (name) => { this.setState({ name: name }); };
  setQuantity = (quantity) => { this.setState({ quantity: parseInt(quantity) }); };
  setPrice = (price) => { this.setState({ price: parseFloat(price) }); };

  render() {
    return <XBlock>
      <XList>
        <XField icon={<DriveFileRenameOutlineIcon />} flexlist={true} setField={this.setName}>
          Название товара
        </XField>

        <div className="product-edit">
          <XField icon={<ShoppingCartIcon />} flexlist={true} setField={this.setQuantity}>
            Кол-во
          </XField>
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </div>
          <XField icon={<CurrencyRubleIcon />} flexlist={true} setField={this.setPrice}>
            Цена
          </XField>

          <XButton
            icon={<AddIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={() => {
              this.props.toolkit.addProduct({
                name: this.state.name,
                quantity: this.state.quantity,
                price: this.state.price
              });
              this.setState({
                name: "",
                quantity: 1,
                price: 0.0,
              });
            }} />
          <XButton
            icon={<CloseIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={() => {
              this.props.toolkit.clearList();
            }} />
        </div>
      </XList>
    </XBlock>;
  }
}
