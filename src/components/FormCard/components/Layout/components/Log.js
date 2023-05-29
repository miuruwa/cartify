import React from "react";

import { XButton } from "../../../../XForms";
import { XVertical } from "../../../../XBlock";

import DoneIcon from '@mui/icons-material/Done';

export default class LogMessage extends React.Component {
  render() {
    return <>
        <h1>Лог обновления 1.1 </h1>
        <p>
          В рамках обновления 1.1. были произведены следующие изменения:
        </p>
        <p>
          ✦ Переработана форма создания нового продукта
        </p>
        <p>
          ✦ Переработана форма элемента уже внесённого продукта
        </p>
        <p>
          ✦ Переработана форма карточки с настройками
        </p>
        <p>
          ✦ Переработана форма с подсчётом итоговой суммы похода в магазин
        </p>
        <p>
          ✦ При редактировании уже внесённого продукта, если пользователь попытается сохранить его с пустыми параметрами, то программа уведомит об ошибке.
        </p>
        <p>
          ✦ При открытии настроек форма наличных автоматически заполняется, если уже известно о наличных пользователя
        </p>
        <XVertical>
            <XButton icon={<DoneIcon/>} 
                onClick={() => {
                this.props.toolkit.returnCardResponse(null)
            }}>
                Окей
            </XButton>
        </XVertical>
      </>
  }
}
