import React from "react";

import { XList, XVertical, FormLabel } from "../../../../XBlock";
import { XButton, XTumbler, XField } from "../../../../XForms";

import ColorSchemaChanger from "../../../../ColorSchemaChanger";
import DoneIcon from '@mui/icons-material/Done';

export default class SettingsMessage extends React.Component {
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
    return (
      <>
        <h1>Настройки</h1>
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
          <XList sx={[{flex: "1 1 auto", height: "40px"}, {flex: "1 1 auto", height: "40px"}]}>
            <XButton title="Открыть лог" style={{width: "100%"}} onClick={
                () => {
                  this.props.toolkit.showCard("log");
                }
              }/>
            <XButton title="Привет, мир" style={{width: "100%"}} onClick={
                () => {
                  this.props.toolkit.showCard("hello-world");
                }
              }/>
          </XList>
          <XButton icon={<DoneIcon/>} 
              onClick={() => {
              this.props.toolkit.returnCardResponse(null)
          }}>
            Окей
          </XButton>
        </XVertical>
      </>
    )
  }
}
