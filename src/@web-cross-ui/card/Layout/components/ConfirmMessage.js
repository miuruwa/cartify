import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'

import {
    Button
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"


export default function ConfirmMessage () {
    const toolkit = useToolKit()

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
            <Button 
                    icon={<DoneIcon />} theme="transparent" title="Да"
                    onClick={returnYes} 
            />
            <Button 
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
