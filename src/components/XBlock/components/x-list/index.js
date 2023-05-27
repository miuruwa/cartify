import "./scss/stylesheet.scss";
import { Children } from "react";

function XList(props) {
  let classList = ["x-list"]
  if (props.horListAtMobile) {
    classList.push("mobile-horizontal")
  }
  return <div className={classList.join(" ")}>
    {Children.map(props.children, child => <div className="x-list-children">
      {child}
    </div>)}
  </div>;
}

export {XList};
