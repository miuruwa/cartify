import React from "react";

export default class AddProductError extends React.Component {
  render() {
    return (
      <>
        <h1>Ошибка добавления продукта!</h1>
        <p>
          Убедитесь, что все поля заполнены!
        </p>
      </>
    );
  }
}
