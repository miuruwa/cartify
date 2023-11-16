export default function (props) {
    const {
        className, xstyle, xref, onClick, children
    } = props;

    const containerProps = {
        className,
        style: xstyle,
        ref: xref,
        children,
        onClick
    };

    return <div {...containerProps} />;
}
