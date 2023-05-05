import React from "react";
import { nanoid } from "nanoid";

import "./css/stylesheet.css";
import AppContent from "./components/Content";

import {getScreenDeviceType} from "./shared/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSchema: localStorage.getItem("colorSchema") || "dark",

      productList: JSON.parse(localStorage.getItem("product-list")) || [],

      cardTopOffset: 0,
      cardMounted: false,
      cardLoaded: true,
      cardLayout: "settings",
      cardResponse: JSON.parse(localStorage.getItem("latestResponse")) || {
        layout: "settings",
        response: null,
      },
    };
  }

  createToolkit() {
    this.toolkit = {
      cardMounted: this.state.cardMounted,
      cardLayout: this.state.cardLayout,
      cardResponse: this.state.cardResponse,
      cardTopOffset: this.state.cardTopOffset,
      cardLoaded: this.state.cardLoaded,


      showCard: (layout) => {
        var offset = 100;
        if (this.state.cardMounted) {
          this.toolkit.returnCardResponse(null);
          offset += 100;
        }

        setTimeout(() => {
          this.setState({
            cardLayout: layout,
            cardTopOffset: window.scrollY,
            cardMounted: true,
          });
        }, offset);

        setTimeout(() => {
          this.setState({
            cardLoaded: true,
          });
        }, 100 + offset);
      },

      returnCardResponse: (response) => {
        this.setState({
          cardResponse: {
            layout: this.state.cardLayout + "",
            response: response,
          },
          cardLoaded: false,
        });
        localStorage.setItem(
          "latestResponse",
          JSON.stringify({
            layout: this.state.cardLayout + "",
            response: response,
          })
        );
        window.scrollTo(window.scrollX, this.toolkit.cardTopOffset + 0);
        setTimeout(() => {
          this.setState({
            cardMounted: false,
          });
        }, 100);
      },
      colorSchema: this.state.colorSchema,
      setColorSchema: (schema) => {
        localStorage.setItem("colorSchema", schema);
        this.setState({
          colorSchema: schema,
        });
      },

      productList: this.state.productList,
      addProduct: (product) => {
        this.setState({
          productList: [...this.state.productList, {
            name: product.name,
            id: nanoid(),
            quantity: product.quantity,
            price: product.price
          }]
        })
        localStorage.setItem("product-list", JSON.stringify(this.state.productList));
      },
      removeProduct: (productID) => {
        this.setState(prevState => ({
          productList: prevState.productList.filter(product => product.id !== productID)
        }));
        localStorage.setItem("product-list", JSON.stringify(this.state.productList));
      },
      changeProduct: (productID, name=null, quantity=null, price=null) => {
        this.setState(prevState => ({
          productList: prevState.productList.map(
          item => {
            if (item.id !== productID) {
              return item
            }
            item.name = name
            item.quantity = quantity
            item.price = price
            
            return item
          })}))
          localStorage.setItem("product-list", JSON.stringify(this.state.productList));
      },

      getTotalCost: () => {
        return this.state.productList.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
      },
      clearList: () => {
        this.setState({productList: []})
      }
    };
  }

  render() {
    this.createToolkit();

    this.layoutClassList = ["webx"]
    this.layoutClassList.push("color-schema-" + this.toolkit.colorSchema)
    this.layoutClassList.push(getScreenDeviceType())

    document.body.className = this.layoutClassList.join(" ");

    try {
      return (
        <>
          <AppContent toolkit={this.toolkit} />
        </>
      );
    } catch (error) {
      return (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      );
    }
  }
}

export default App;
