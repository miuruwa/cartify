import {
    Button
} from "@web-cross-ui/forms"

export default function ActionButton({ icon, onClick }) {
    return <Button
        theme="white"
        icon={icon}
        onClick={onClick}
    />
}