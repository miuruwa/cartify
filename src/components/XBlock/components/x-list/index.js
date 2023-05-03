import "./scss/stylesheet.scss";

function XList(props) {
  let classList = ["x-list"]
  if (props.horListAtMobile) {
    classList.push("mobile-horizontal")
  }
  return <div className={classList.join(" ")}>{props.children}</div>;
}

export {XList};
