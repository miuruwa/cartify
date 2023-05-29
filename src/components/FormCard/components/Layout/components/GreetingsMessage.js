import React from "react";

import { XList, XVertical, FormLabel } from "../../../../XBlock";
import { XButton, XTumbler, XField } from "../../../../XForms";

import ColorSchemaChanger from "../../../../ColorSchemaChanger";

import DoneIcon from '@mui/icons-material/Done';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PersonIcon from '@mui/icons-material/Person';

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
          Перед началом предлагаем настроить приложение:
        </h1>
        <XVertical>
          <XList xstyle={{justifyContent:"space-between"}}>
            <FormLabel>Цветовая схема</FormLabel>
            <ColorSchemaChanger align="right" toolkit={this.props.toolkit} />
          </XList>
          <XList xstyle={{justifyContent:"space-between"}}>
            <FormLabel>Включить подсчёт сдачи</FormLabel>
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.props.toolkit.inTotalMode}
              setContext={this.props.toolkit.setTotalMode}
            />
          </XList>
          <XList xstyle={{justifyContent:"space-between"}}>
            <FormLabel>Валюта</FormLabel>
            <XField cleanable={true} field={this.props.toolkit.currency} setField={this.props.toolkit.setCurrency}>
              валюта
            </XField>
          </XList>
          <XButton icon={<DoneIcon/>} 
              onClick={() => {
            this.props.toolkit.returnCardResponse(null)
          }}>
            Окей
          </XButton>
          <XButton icon={<PersonIcon/>}
                onClick={() => {
                this.props.toolkit.showCard("hello-world")
              }}>
            Открыть "Привет мир"
          </XButton>
          <XButton icon={<QuestionMarkIcon/>} 
              onClick={() => {
            this.props.toolkit.returnCardResponse("log")
          }}>
            Лог обновления 1.1.2
          </XButton>
        </XVertical>
        
      </>
  }
}
