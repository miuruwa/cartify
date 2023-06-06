import React from "react";
import XBlock, { XVertical } from "../../../../XBlock";
import { Headline } from "./Headline";

export function LogPage(props) {
  return <XBlock>
    <XVertical className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        Лог версии 1.2.0
      </Headline>
      <div className="settings-text">
        В версии 1.2.0 был проведён ряд изменений:
      </div>
      <div className="settings-text">
        ✦ Возможность пользоваться калькулятором оффлайн
      </div>
      <div className="settings-text">
        ✦ Настройки перенесены из карточек на отдельную страницу
      </div>
      <div className="settings-text">
        ✦ В настройках появились вкладки
      </div>
    </XVertical>
  </XBlock>;
}
