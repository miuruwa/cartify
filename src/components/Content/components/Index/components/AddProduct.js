import React from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import XBlock, { XList, XHorizontal } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export class AddProduct extends React.Component {
  state = {
    name: "",
    quantity: "",
    price: "",
    added: false,
  }
  
  setName = (name) => {
    this.setState({ 
      name: name
    })
  }

  setQuantity = (quantity) => {
    this.setState({
      quantity: parseFloat(quantity)
    })
  }

  setPrice = (price) => {
    this.setState({
      price: parseFloat(price)
    })
  }

  addProduct = () => {
    if (this.state.name === "") {
      this.props.toolkit.showCard("add-product-error")
      return
    }
    
    if (this.state.quantity === 0.0 || isNaN(this.state.quantity)) {
      this.props.toolkit.showCard("add-product-error")
      return
    }
    
    if (this.state.price === 0.0 || isNaN(this.state.price)) {
      this.props.toolkit.showCard("add-product-error")
      return
    }

    this.props.toolkit.addProduct({
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price
    })

    this.setState({
      added: true,
      name: "",
      quantity: "",
      price: "",
    })

    setTimeout(() => {
      this.setState({
        added: false,
      })
    }, 500)

  }

  addForm = () => {
    return <XList sx={[{flex: "1 1 auto"}, {}]}>
      <XField 
          icon={<DriveFileRenameOutlineIcon />} cleanable={true}
          flexlist={true} 
          field={this.state.name} setField={this.setName}>
        Название товара
      </XField>
      <XHorizontal xstyle={{justifyContent: "space-between"}}>
        <XHorizontal>
          <XField
              fieldValue={this.props.toolkit.currency}
              flexlist={true}
              cleanable={true}
              field={this.state.price} setField={this.setPrice}>
            Цена
          </XField>
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </div>
          <XField
              fieldValue="шт."
              cleanable={true}
              flexlist={true}
              field={this.state.quantity} setField={this.setQuantity}>
            Кол-во
          </XField>
        </XHorizontal>
        <XButton
          icon={<AddIcon />}
          hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
          onClick={this.addProduct} />
      </XHorizontal>
    </XList>
  }

  addComplete = () => {
    return <div className="add-product-status">
      Товар добавлен в список
    </div>
  }

  addImpossible = () => {
    return <div className="add-product-status">
      Чтобы добавить новый продукт, выйдите из режима редактирования.
    </div>
  }

  addContainer = () => {
    if (this.props.toolkit.selectedProduct !== null) {
      return this.addImpossible()
    }
    if (this.state.added) {
      return this.addComplete()
    }
    return this.addForm()
  }

  render () {
    return <XBlock>
      {this.addContainer()}
    </XBlock>
  }
}