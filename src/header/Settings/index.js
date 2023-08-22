import {
    useState
} from "react";

import {
    useToolKit
} from "@webx/toolkit";

import {
    Button,
    CardBlock
} from "@webx/forms";

import UpdateCacheIcon from "@webx/icons/UpdateCacheIcon";

import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

import CacheApp from "./CacheApp";
import SaveCurrencyButton from "./SaveCurrencyButton";

function ShowSettingsButton() {
    const toolkit = useToolKit();

    function onClick() {
        toolkit.card.show(<SettingsСard />);
    }

    return <Button
        title="OK"
        onClick={onClick} />;
}

function ErrorCard() {
    return <div className="cart-calc-message">
        <h6>
            Ошибка выполнения задачи
        </h6>
        <CardBlock>
            <p>
                Данная функция работает только при включённом офлайн-режиме (т.е. есть кеш приложения)
            </p>
        </CardBlock>
        <ShowSettingsButton />
    </div>;
}

function UpdateCacheButton() {
    const toolkit = useToolKit();
    
    function onClick() {
        if (toolkit.settings.cacheApp) {
            serviceWorkerRegistration.unregister();
            window.location.href = process.env.PUBLIC_URL;
        }
        else {
            toolkit.card.show(<ErrorCard />);
        }
    }

    return <Button
        className="settings-block"
        icon={<UpdateCacheIcon />}
        title="Сбросить offline-версию"
        onClick={onClick} />;
}

export default function SettingsСard() {
    const toolkit = useToolKit();
    const [currency, setCurrency] = useState(toolkit.cartCalc.currency);

    function onChange(event) {
        switch (event.target.name) {
            default:
                setCurrency(event.target.value);
        }
    }

    return <form className="cart-calc-message">
        <h6>
            Настройки
        </h6>
        <CardBlock>
            <label>
                Валюта
                <input
                    type="text"
                    name="currency"
                    value={currency}
                    onChange={onChange} />
            </label>
            <label>
                Запускать offline
                <CacheApp />
            </label>
        </CardBlock>
        <UpdateCacheButton />
        <SaveCurrencyButton currency={currency}/>
    </form>;
}
