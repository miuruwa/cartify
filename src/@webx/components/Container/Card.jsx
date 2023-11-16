import Container from "./Container";

export default function(props) {
    const {
        className, xstyle, xref, onClick, children
    } = props;

    let classList = ["card-container", className];

    const containerProps = {
        className: classList.join(" "),
        xstyle: xstyle,
        xref: xref,
        children,
        onClick
    };

    return <Container {...containerProps} />;
}
