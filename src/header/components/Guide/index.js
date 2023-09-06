import {
    CardBlock
} from "@webx/forms"

import CloseIcon from "@webx/icons/CloseIcon"
import EditIcon from "@webx/icons/EditIcon"
import OKButton from "./OKButton"


function Guide () {
    const MenuButton = "· · ·"
    const EditButton = <EditIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />
    const CloseButton = <CloseIcon fontSize="small" sx={{ transform: "translateY(4px)"}} />
    
    return <div className="cart-calc-message">
        <h6>
            Инструкция
        </h6>
        <CardBlock>
            ✦ Чтобы добавить продукт, добавьте информацию о нём в шапке и нажмите на кнопку "+"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы очистить список продуктов, нажмите на кнопку "{MenuButton}" и в выпадающем меню нажмите "Очистить список"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы отредактировать продукт, нажмите на кнопку "{EditButton}"
        </CardBlock>
        <CardBlock>
            ✦ Чтобы убрать один продукт в списке, нажмите на кнопку "{CloseButton}"
        </CardBlock>
        <OKButton />
    </div>
}

export default Guide