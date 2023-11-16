import Container from "./Container";

export default function(props) {
    const {
        className, xstyle, xref, onClick, children
    } = props;

    let classList = ["grid-container", className];

    const containerProps = {
        className: classList.join(" "),
        style: xstyle,
        xref: xref,
        children,
        onClick
    };

    return <Container {...containerProps} />;
}
