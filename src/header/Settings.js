import { useState } from "react"
import {
    Button,
    CardBlock, Tumbler
} from "@webx/forms"

import {
    useToolKit
} from "@webx/toolkit"

import UpdateCacheIcon from "@webx/icons/UpdateCacheIcon"

import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

function ErrorCard () {
    const toolkit = useToolKit()

    const OK = () => {
        const action = () => {
            toolkit.card.show(<Settings/>)
        }

        return <Button 
            title="OK"
            onClick={action}
        />
    }

    return <div className="cart-calc-message">
        <h6>
            Ошибка выполнения задачи
        </h6>
        <CardBlock>
            <p>
                Данная функция работает только при включённом офлайн-режиме (т.е. есть кеш приложения)
            </p>
        </CardBlock>
        <OK />
    </div>
}

export default function Settings () {
    const toolkit = useToolKit()
    const [currency, setCurrency] = useState(toolkit.cartCalc.currency)

    const handleChange = (event) => {
        switch (event.target.name) {
            default:
                setCurrency(event.target.value)
        }
    }

    const OK = () => {
        const action = () => {
            toolkit.cartCalc.currency = currency
            toolkit.card.return()
        }

        return <Button 
            title="OK"
            onClick={action}
        />
    }
    const CheckForUpdatesButton = () => {
        const CheckForUpdates = () => {
            if (toolkit.settings.cacheApp) {
                serviceWorkerRegistration.unregister()
                window.location.href = process.env.PUBLIC_URL
            }
            else {
                toolkit.card.show(<ErrorCard />)
            }
        }

        return <Button 
                className="settings-block"
                icon={<UpdateCacheIcon/>}
                title="Сбросить offline-версию" 
                onClick={CheckForUpdates}
        />
    }

    const CacheApp = () => {
        const setState = (state) => {
            if (!state) {
                serviceWorkerRegistration.unregister()
            }
            else {
                serviceWorkerRegistration.register()
            }
            
            toolkit.settings.cacheApp = state
        }

        return <Tumbler
                state={toolkit.settings.cacheApp}
                setState={setState}
        />
    }
    return <form className="cart-calc-message">
        <h6>
            О приложении
        </h6>
        <CardBlock>
            <div className="options-grid-list">
                <div>
                    Название:
                </div>
                <div>
                    {process.env.REACT_APP_FULL_NAME}
                </div>
                <div>
                    Версия:
                </div>
                <div>
                    {process.env.REACT_APP_VERSION}
                </div>
            </div>
        </CardBlock>
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
                    onChange={handleChange}
                />
            </label>
            <label>
                Запускать offline
                <CacheApp />
            </label>
        </CardBlock>
        <CheckForUpdatesButton />
        <OK />
    </form>
}