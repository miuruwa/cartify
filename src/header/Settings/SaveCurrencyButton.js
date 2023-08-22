import { 
    useToolKit
} from "@webx/toolkit";

import { 
    Button 
} from "@webx/forms";

function SaveCurrencyButton({ currency }) {
    const toolkit = useToolKit();

    function onClick() {
        toolkit.cartCalc.currency = currency;
        toolkit.card.return();
    }

    return <Button
        title="Сохранить"
        theme="white"
        onClick={onClick} />;
}

export default SaveCurrencyButton