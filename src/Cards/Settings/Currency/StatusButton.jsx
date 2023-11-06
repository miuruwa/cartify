import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/forms";
import currencies from "./currencies";

export default function () {
    const toolkit = useToolKit();

    const currencyList = currencies[toolkit.settings.language].content;

    const actualCurrencyID = currencyList.findIndex(item => item.currency === toolkit.cartCalc.currency);
    const actualCurrency = currencyList[~actualCurrencyID ? actualCurrencyID : 0];

    const buttonProps = {
        theme: "white",
        title: `${actualCurrency.currency} (${actualCurrency.name})`,
        isDropdown: true
    };

    return <Button {...buttonProps} />;
}
