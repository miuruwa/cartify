import {
    Button
} from "@web-cross-ui/forms"

export default function ActionButton({ icon, onClick }) {
    return <Button
        theme="transparent"
        icon={icon}
        onClick={onClick}
    />
}