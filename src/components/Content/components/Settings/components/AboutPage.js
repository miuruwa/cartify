import React from "react";
import XBlock, {XHorizontal, XVertical} from "../../../../XBlock";
import { Headline } from "./Headline";
import Sticker2 from './17.png';

export function AboutPage(props) {
  return <XBlock>
    <XVertical className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        О программе
      </Headline>
      <div className="settings-text">
        Это приложение создано по личной необходимости как удобный инструмент при походе в магазин.
      </div>
      <div className="settings-text">
      Приложение не требует никаких платежей (как бы часто не мелькали рубли у вас на глазах). Калькулятором можно пользоваться совершенно бесплатно.
      </div>
      <div className="settings-text">
      Поддержать автора можно закинув денюшки на его карту: <b>2200 7007 9962 2518</b>
      </div>
      <center>
        <a href="https://t.me/addstickers/nasyka_lineye8">
          <img src={Sticker2} alt="miuruwa sticker" style={{width:"128px", height: "128px"}}/>
        </a>
      </center>
    </XVertical>
  </XBlock>;
}
