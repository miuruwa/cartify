import {
    useContext
} from "react"

import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'

import {
    Button
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

export default function ConfirmMessageAll () {
    const toolkit = useToolKit()

    const UserResponse = () => {
        const returnYes = () => {
            toolkit.notes.removeAll(true)
        }
      
        const returnNo = () => {
            toolkit.card.return({
                hideReason: "all notes saved via warning"
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
            Вы действительно хотите удалить все заметки?
        </h1>
        <p>
            Это действие будет невозможно отменить.
        </p>
        <UserResponse />
    </>
}
