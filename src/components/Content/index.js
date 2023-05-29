import "./scss/content.scss";

import Content from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default class AppContent extends React.Component {
  render () {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart-calc/*" element={<Content toolkit={this.props.toolkit}/>} />
        {/* <Route exact path="/cart-calc/" element={Index(this.props)} /> */}
      </Routes>
    </BrowserRouter>
  )
}
}