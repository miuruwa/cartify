import React from "react";
import { Product } from "./Product";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export class ProductList extends React.Component {
  notFound = () => {
    return <div className="product-not-found">
      <h3>
        Инструкции к использованию:
      </h3>
      <p>
        ✦ Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите на кнопку"<AddIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
      </p>
      <p>
        ✦ Чтобы включить режим подсчитывания сдачи, зайдите в настройки
      </p>
      <p>
        ✦ Чтобы очистить список продуктов, нажмите на клавишу "Очистить список" под блоком с итоговой суммой.
      </p>
      <p>
        ✦ Чтобы отредактировать продукт, нажмите на кнопку "<EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
      </p>
      <p>
        ✦ Чтобы убрать один продукт в списке, нажмите на кнопку "<CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}}/>"
      </p>
    </div>
  }

  mapList = () => {
    return <>
      {
        this.props.toolkit.productList.map(item => <Product key={item.id} product={item} toolkit={this.props.toolkit} />)
      }
    </>
  }

  render() {
    if (this.props.toolkit.productList.length === 0) {
      return this.notFound()
    }
    return this.mapList()
  }
}
