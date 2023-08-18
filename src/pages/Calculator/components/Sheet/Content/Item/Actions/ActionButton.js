import {
    Button
} from "@web-cross-ui/forms"

export default function ActionButton({ icon, onClick, title }) {
    return <Button
        theme="white"
        icon={icon} alt={title}
        onClick={onClick}
    />
}