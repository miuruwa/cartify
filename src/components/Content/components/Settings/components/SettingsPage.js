import React from "react";

import { Headline } from "./Headline";
import XBlock, { XHorizontal, XVertical, FormLabel } from "../../../../XBlock";
import { XTumbler, XField } from "../../../../XForms";
import ColorSchemaChanger from "../../../../ColorSchemaChanger";



export function SettingsPage(props) {
  let contexts = [
    {
      name: "ВЫКЛ.",
      context: false,
    },
    {
      name: "ВКЛ.",
      context: true,
    },
  ]
  return <XBlock>
    <XVertical className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        Основные
      </Headline>
      <XHorizontal xstyle={{justifyContent:"space-between"}}>
        <FormLabel>Цветовая схема</FormLabel>
        <ColorSchemaChanger align="right" toolkit={props.toolkit} />
      </XHorizontal>
      <XHorizontal xstyle={{justifyContent:"space-between"}}>
        <FormLabel>Подсчёт сдачи</FormLabel>
        <XTumbler
          tumbleConfig={contexts}
          context={props.toolkit.inTotalMode}
          setContext={props.toolkit.setTotalMode}
        />
      </XHorizontal>
      <XHorizontal xstyle={{justifyContent:"space-between"}}>
        <FormLabel>Валюта</FormLabel>
        <XField cleanable={true} field={props.toolkit.currency} setField={props.toolkit.setCurrency}>
          валюта
        </XField>
      </XHorizontal>
    </XVertical>
  </XBlock>;
}
