import {
    useState,
    useContext
} from "react";

import {
    XBlock, 
    XButton, 
    XField
} from "@web-cross-ui/forms";

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    CloseIcon, // DragIndicatorIcon,
    DoNotDisturbAltIcon, DriveFileRenameOutlineIcon, 
    DoneIcon, EditIcon
} from "Content/icons"


export default function Product ({product}) {
  const toolkit = useContext(ToolKitContext)

  const [data, setData] = useState({
    removed: 0,

    name: product.name,
    name_editing: product.name,

    quantity: product.quantity,
    quantity_editing: product.quantity,

    price: product.price,
    price_editing: product.price,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const getTotalProductPrice = () => {
    let response = data.quantity * data.price

    return response.toFixed(2)
  }

  const ProductInfo = () => {
    return <div className="product-item-info">
      <div className="product-item-info-name">
        {data.name}
      </div>
      <ActionButton icon={<EditIcon />} onClick={selectCurrentID} />
      <ActionButton icon={<CloseIcon />} onClick={removeAction} />
      <div className="product-item-info-calculation">
        <nobr>
          {data.price}&nbsp;{toolkit.cartCalc.currency}
        </nobr>
        &nbsp;×&nbsp;
        <nobr>
          {data.quantity}&nbsp;шт.
        </nobr>
        &nbsp;=&nbsp;
        <nobr>
          {getTotalProductPrice()}&nbsp;{toolkit.cartCalc.currency}
        </nobr>
      </div>
    </div>
  }

  const ProductEdit = () => {
    return <div className="product-item-edit">
      <div className="product-item-edit-first">
        <XField 
            icon={<DriveFileRenameOutlineIcon />} 
            name="name_editing"
            value={data.name_editing}
            onChange={handleChange}
        >
          Название товара
        </XField>
        <div className="action-list">
          <ActionButton icon={<DoneIcon />} onClick={setNewData} />
          <ActionButton icon={<DoNotDisturbAltIcon />} onClick={setOldData} />
        </div>
      </div>
      
      <XField
          fieldValue={toolkit.currency}
          name="price_editing"
          value={data.price_editing}
          onChange={handleChange}
      >
        Цена
      </XField>
      <div className="x-separator">
        <CloseIcon />
      </div>
      <XField
          fieldValue="шт."
          name="quantity_editing"
          value={data.quantity_editing}
          onChange={handleChange}
      >
        Кол-во
      </XField>
    </div>
  }

  const ItemContainer = () => {
    switch (data.removed) {
      case 1: return <div className="add-product-status">
        Продукт был удалён
      </div>
      case 2: return <></>
      default: break;
    }
    if (toolkit.cartCalc.targetProduct === product.id) {
      // Данный продукт сейчас редактируется
      return <ProductEdit />
    }
    else {
      // item данного продукта лишь информирует
      return <ProductInfo />
    }
  }

  const ActionButton = (props) => {
    return <XButton // Внести новые изменения
      accent="transparent"
      icon={props.icon}
      hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
      onClick={props.onClick}
    />
  }

  const setNewData = () => {
    if (data.name_editing === "") {
      toolkit.card.show("add-product-error")
      return
    }
    
    if (data.quantity_editing === 0.0 || isNaN(data.quantity_editing)) {
      toolkit.card.show("add-product-error")
      return
    }
    
    if (data.price_editing === 0.0 || isNaN(data.price_editing)) {
      toolkit.card.show("add-product-error")
      return
    }

    setData(prev => ({
      ...prev,
      name: data.name_editing,
      quantity: data.quantity_editing,
      price: data.price_editing,
    }))
    
    toolkit.cartCalc.changeProduct(
      product.id, 
      data.name_editing, 
      data.quantity_editing, 
      data.price_editing
    )
    toolkit.cartCalc.targetProduct = null;
  }

  const setOldData = () => {
    setData(prev => ({
      ...prev,
      name_editing: data.name,
      quantity_editing: data.quantity,
      price_editing: data.price,
    }))

    toolkit.cartCalc.targetProduct = null
  }

  const selectCurrentID = () => {
    toolkit.cartCalc.targetProduct = product.id;
  }

  const removeAction = () => {
    setData(prev => ({
      ...prev,
      removed: 1,
    }))

    setTimeout(() => {
      setData(prev => ({
        ...prev,
        removed: 2,
      }))
    }, 1000)

    setTimeout(() => {
      setData(prev => ({
        ...prev,
        removed: 3,
      }))
      toolkit.cartCalc.removeProduct(product.id)
    }, 1100)
  }
  // const DraggingButton = () => {
  //   // const setdrag = useContext(DragContext);
    
  //   return <div>
  //         <XButton
  //           className="dragging-button"
  //           accent="transparent"
  //           icon={<DragIndicatorIcon />}
  //           hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
  //       />
      
  //     </div>
  // }

  const classList = ["product-item"]

  switch (toolkit.cartCalc.targetProduct) {
    case null: 
      if (data.removed === 1) {
        classList.push("hidden")
      }
      if (data.removed === 2) {
        classList.push("hidden removed")
      }
      break;

    case product.id: 
      classList.push("editing")
      break;

    default:
      classList.push("hidden")
      break;
  }

  return <div className="product-wrap">
    <XBlock className={classList.join(" ")}>
      {/* <DraggingButton /> */}
      <ItemContainer />
    </XBlock>
  </div>
}