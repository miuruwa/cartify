import GreetingsMessage from "./components/GreetingsMessage";
import SettingsMessage from "./components/SettingsMessage";
import NotFoundMessage from "./components/NotFoundMessage";
import AddProductError from "./components/AddProductError";

import React from "react";
import { nanoid } from "nanoid";

export default class Layout extends React.Component {
  layoutList = [
    {
      name: "hello",
      layout: <GreetingsMessage key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "settings",
      layout: <SettingsMessage key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "add-product-error",
      layout: <AddProductError key={nanoid()} toolkit={this.props.toolkit} />,
    }
  ];

  getLayout = (layout) => {
    const loadedLayout = layout;
    if (loadedLayout.name === this.props.toolkit.cardLayout) {
      return loadedLayout.layout;
    }
  };

  render() {
    return (
      <>
        {this.layoutList.map(this.getLayout) || (
          <NotFoundMessage toolkit={this.props.toolkit} />
        )}
      </>
    );
  }
}
