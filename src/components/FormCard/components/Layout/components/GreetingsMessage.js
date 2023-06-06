import React from "react";

import { XButton } from "../../../../XForms";

import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import { XVertical } from "../../../../XBlock";

export default class GreetingsMessage extends React.Component {
  contexts = [
    {
      name: "ВЫКЛ.",
      context: false,
    },
    {
      name: "ВКЛ.",
      context: true,
    },
  ]

  render() {
    return <>
        <h1>
          Обновление 1.2.0
        </h1>
        <p>
          У калькулятора покупок вышло новое обновление,
        </p>
        <p>
          поэтому перед началом советуем проверить свои настройки, чтобы вы могли убедиться, что все настройки остались на своём месте:
        </p>
        <XVertical>
          <XButton icon={<SettingsIcon/>} style={{width: "100%"}}
                onClick={() => {
                window.location.href=process.env.PUBLIC_URL + "/settings/"
              }}>
            Открыть настройки
          </XButton>
          <XButton icon={<DoneIcon/>} style={{width: "100%"}}
                onClick={() => {
                this.props.toolkit.returnCardResponse(null)
              }}>
            Закрыть оповещение
          </XButton>
        </XVertical>
      </>
  }
}
