import {
    useContext
} from "react"

import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'

import {
    XButton
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"


export default function ConfirmMessage () {
    const toolkit = useContext(ToolKitContext)

    const UserResponse = () => {
        const returnYes = () => {
            toolkit.notes.remove(toolkit.card.props.note_deletion_index, true)
        }
      
        const returnNo = () => {
            toolkit.card.return({
                hideReason: "notes removing canceled with enabled warnings"
            })
        }
        
        return <>
            <XButton 
                    icon={<DoneIcon />} accent="transparent" title="Да"
                    onClick={returnYes} 
            />
            <XButton 
                    icon={<ClearIcon />}  title="Нет"
                    onClick={returnNo}
            />
        </>
    }

    return <>
        <h1>
            Вы действительно хотите удалить эту заметку?
        </h1>
        <p>
            Это действие будет невозможно отменить.
        </p>
        <UserResponse />
    </>
}
