import React from "react";
import { Product } from "./Product";

export class ProductList extends React.Component {
  render() {
    if (this.props.toolkit.productList.length === 0) {
      return <div className="product-not-found">
        <p>
          Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите "+"
        </p>
        <p>
          Чтобы очистить список добавленных продуктов, нажмите "х" в шапке
        </p>
      </div>;
    }
    return this.props.toolkit.productList.map(item => <Product key={item.id} product={item} toolkit={this.props.toolkit} />);
  }
}
