import React from "react";
import { Product } from "./Product";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export class ProductList extends React.Component {
  render() {
    if (this.props.toolkit.productList.length === 0) {
      return <div className="product-not-found">
        <p>
          Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите "+"
        </p>
        <p>
          Чтобы очистить список добавленных продуктов, зайдите в настройки
        </p>
        <p>
          Разработано kensoi в 2023 c <FavoriteBorderIcon fontSize="small" sx={{color: "red", transform: "translateY(3px)"}}/>
        </p>
      </div>;
    }
    return this.props.toolkit.productList.map(item => <Product key={item.id} product={item} toolkit={this.props.toolkit} />);
  }
}
