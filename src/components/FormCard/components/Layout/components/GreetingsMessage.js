import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import LightModeIcon from "@mui/icons-material/LightMode";
import Sticker from './14.png';

export default class GreetingsMessage extends React.Component {
  render() {
    return (
      <>
        <h1>Привет, мир!</h1>
        <p>
          Это приложение получило кучу переработок внутри одного репозитория, данное сообщение описывает новые инструкции для приложения.
        </p>
        <p>
          ✦ Очищение списка продуктов размещено в настройках приложения. Чтобы открыть настройки, нажмите <SettingsIcon fontSize="small" sx={{ transform: "translateY(5px)"}}/>
        </p>
        <p>
          ✦ Новые продукты теперь помещаются в самом верху списка, а не снизу.
        </p>
        <p>
          ✦ Чтобы отредактировать продукт, наведите на него курсор и нажмите на <DriveFileRenameOutlineIcon fontSize="small" sx={{ transform: "translateY(5px)"}}/>
        </p>
        <p>
          ✦ В форме редактирования продукта кнопка <CloseIcon fontSize="small" sx={{ transform: "translateY(5px)"}}/>, отвечающая за удаление продукта, заменена на <DoNotDisturbAltIcon fontSize="small" sx={{ transform: "translateY(5px)"}}/>, которая отвечает за отмену редактирования продукта.
        </p>
        <p>
          ✦ При попытке добавить незаполненный продукт приложение отправляет вам уведомление об ошибке.
        </p>
        <p>
          ✦ В настройках появилась возможность включить светлую <br/><LightModeIcon fontSize="small" sx={{ transform: "translateY(5px)"}}/> цветовую схему.   
        </p> 
        <p>
          ✦ Открыть данное сообщение можно в настройках приложения.   
        </p> 
        <br/>
        <p>
          При желании поддержать автора можно закинуть денюшку на его карту: <b>2200 7007 9962 2518</b>
        </p>
        <a href="https://t.me/addstickers/nasyka_lineye8">
          <img src={Sticker} alt="miuruwa sticker" style={{width:"128px", height: "128px"}}/>
        </a>
      </>
    );
  }
}
