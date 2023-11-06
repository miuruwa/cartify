import { useState } from "react";

import { useToolKit } from "@webx/toolkit";

import Target from "./Target";
import Finish from "./Finish";
import Input from "./Input";


export default function () {
    const toolkit = useToolKit();

    const IS_CURRENT_TARGET = toolkit.cartCalc.targetProduct !== null;
    const [added, setAdded] = useState(false);

    function updateForm() {
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 500);
    }

    if (IS_CURRENT_TARGET) {
        return <Target />;
    }

    if (added) {
        return <Finish />;
    }

    return <Input updateForm={updateForm} />;
}
