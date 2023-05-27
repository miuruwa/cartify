import React from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import XBlock, { XRaw } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export class AddProduct extends React.Component {
  state = {
    name: null,
    quantity: null,
    price: null,
    added: false,
  };

  setName = (name) => { this.setState({ name: name }); };
  setQuantity = (quantity) => { this.setState({ quantity: parseFloat(quantity) }); };
  setPrice = (price) => { this.setState({ price: parseFloat(price) }); };

  addProduct = () => {
    if (this.state.name !== null && this.state.quantity !== null && this.state.price !== null) {
      this.props.toolkit.addProduct({
        name: this.state.name,
        quantity: this.state.quantity,
        price: this.state.price
      });
      this.setState({
        added: true,
      })
      this.setState({
        name: null,
        quantity: null,
        price: null,
      });
      setTimeout(() => {
        this.setState({
          added: false,
        })
      }, 500)
    }
    else {
      this.props.toolkit.showCard("add-product-error")
    }
  }

  addBox = () => {
    return <XRaw>
      <XField icon={<DriveFileRenameOutlineIcon />} setField={this.setName}>
        Название товара
      </XField>

      <div className="product-edit">
        <XField icon={<CurrencyRubleIcon />} flexlist={true} setField={this.setPrice}>
          Цена
        </XField>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </div>
        <XField icon={<ShoppingCartIcon />} flexlist={true} setField={this.setQuantity}>
          Кол-во
        </XField>
        {/* шт.&nbsp; */}

        <XButton
          icon={<AddIcon />}
          hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
          onClick={this.addProduct} />
      </div>
    </XRaw>
  }
  addComplete = () => {
    return <div className="addProduct-done">
      Товар добавлен в список
    </div>
  }
  render() {
    return <div className="block-wrapper">
      <XBlock>
        {this.state.added ? <this.addComplete/> : <this.addBox />}
      </XBlock>
    </div>
  }
}
