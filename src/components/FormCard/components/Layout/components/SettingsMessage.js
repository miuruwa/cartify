import React from "react";

import { XRaw, XVertical, FormLabel } from "../../../../XBlock";
import { XButton, XTumbler, XField } from "../../../../XForms";

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import ColorSchemaChanger from "../../../../ColorSchemaChanger";

export default class SettingsMessage extends React.Component {
  contexts = [
    {
      name: "OFF",
      context: false,
    },
    {
      name: "ON",
      context: true,
    },
  ];
  render() {
    return (
      <>
        <h1>Настройки</h1>
        <XVertical>
          <XRaw>
            <FormLabel>Цветовая схема</FormLabel>
            <ColorSchemaChanger align="right" toolkit={this.props.toolkit} />
          </XRaw>
          <XRaw>
            <FormLabel> Наличные </FormLabel>
            <XField icon={<CurrencyRubleIcon />} setField={this.props.toolkit.setAvailableMoney}>
              Наличные
            </XField>
          </XRaw>
          <XRaw>
            <FormLabel>Включить подсчёт сдачи</FormLabel>
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.props.toolkit.inTotalMode}
              setContext={this.props.toolkit.setTotalMode}
            />
          </XRaw>
          <XRaw>
            <XButton title="Очистить список" style={{width: "100%"}} onClick={
                () => {
                  this.props.toolkit.clearList();
                  this.props.toolkit.returnCardResponse(null)
                }
              }/>
            <XButton title="Привет, мир" style={{width: "100%"}} onClick={
                () => {
                  this.props.toolkit.showCard("hello");
                }
              }/>
          </XRaw>
        </XVertical>
      </>
    );
  }
}
