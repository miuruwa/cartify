import React from "react";

import XBlock, {XHorizontal, XVertical, XList} from "../../../../XBlock";
import { XButton, XField } from "../../../../XForms";

import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

export class Product extends React.Component {
  state = {
    name: this.props.product.name,
    quantity: this.props.product.quantity,
    price: this.props.product.price,
    name_editing: this.props.product.name,
    quantity_editing: this.props.product.quantity,
    price_editing: this.props.product.price
  }

  setName = (name) => {
    this.setState({ 
      name_editing: name
    })
  }

  setQuantity = (quantity) => {
    this.setState({
      quantity_editing: parseFloat(quantity)
    })
  }

  setPrice = (price) => {
    this.setState({
      price_editing: parseFloat(price)
    })
  }

  getTotalProductPrice = () => {
    let price = this.state.quantity * this.state.price;
    return price.toFixed(2)
  }

  productInfo = () => {
    return <XVertical>
      <div className="product-item-name">
        {this.state.name}
      </div>
      <div className="product-item-descr">
        {this.state.price} {this.props.toolkit.currency} × {this.state.quantity} шт. = {this.getTotalProductPrice()} {this.props.toolkit.currency}
      </div>
    </XVertical>
  }

  productEdit = () => {
    return <XList sx={[{flex: "1 1 auto"}, {}]}>
      <XField 
          icon={<DriveFileRenameOutlineIcon />} 
          cleanable={true}
          flexlist={true} 
          field={this.state.name_editing} setField={this.setName}>
        Название товара
      </XField>
      <XHorizontal>
        <XField
            fieldValue={this.props.toolkit.currency}
            cleanable={true}
            flexlist={true}
            field={this.state.price_editing} setField={this.setPrice}>
          Цена
        </XField>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </div>
        <XField
            fieldValue="шт."
            cleanable={true}
            flexlist={true}
            field={this.state.quantity_editing} setField={this.setQuantity}>
          Кол-во
        </XField>
      </XHorizontal>
    </XList>
  }

  itemContainer = () => {
    if (this.props.toolkit.selectedProduct === this.props.product.id) {
      return  this.productEdit()
    }
    else {
      return this.productInfo()
    }
  }

  actionButton = (props) => {
    return <XButton // Внести новые изменения
      icon={props.icon}
      hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
      onClick={props.onClick}
    />
  }

  setNewData = () => {
    if (this.state.name_editing === "") {
      this.props.toolkit.showCard("add-product-error")
      return
    }
    
    if (this.state.quantity_editing === 0.0 || isNaN(this.state.quantity_editing)) {
      this.props.toolkit.showCard("add-product-error")
      return
    }
    
    if (this.state.price_editing === 0.0 || isNaN(this.state.price_editing)) {
      this.props.toolkit.showCard("add-product-error")
      return
    }

    this.setState({
      name: this.state.name_editing,
      quantity: this.state.quantity_editing,
      price: this.state.price_editing,
    })
    
    this.props.toolkit.changeProduct(this.props.product.id, this.state.name_editing, this.state.quantity_editing, this.state.price_editing)
    this.props.toolkit.setSelectedProduct(null)
  }

  setOldData = () => {
    this.setState({
      name_editing: this.state.name,
      quantity_editing: this.state.quantity,
      price_editing: this.state.price,
    })

    this.props.toolkit.setSelectedProduct(null)
  }

  selectCurrentID = () => {
    this.props.toolkit.setSelectedProduct(this.props.product.id);
  }

  removeAction = () => {
    this.props.toolkit.removeProduct(this.props.product.id);
  }

  productActions = () => {
    if (this.props.toolkit.selectedProduct === this.props.product.id) {
      // продукт сейчас редактируется

      return <XHorizontal>
        {this.actionButton({icon: <DoneIcon />, onClick: this.setNewData})}
        {this.actionButton({icon: <DoNotDisturbAltIcon />, onClick: this.setOldData})}
      </XHorizontal>
    }
    else {
      // продукт не редактируется

      return <XHorizontal>
        {this.actionButton({icon: <EditIcon />, onClick: this.selectCurrentID})}
        {this.actionButton({icon: <CloseIcon />, onClick: this.removeAction})}
      </XHorizontal>
    }
  }

  render () {
    return <XBlock>
      <XHorizontal sx={[{flex: "1 1 auto"}, {}]}>
        {this.itemContainer()}
        {this.productActions()}
      </XHorizontal>
    </XBlock>
  }
}