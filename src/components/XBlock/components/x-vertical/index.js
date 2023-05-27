import "./scss/stylesheet.scss";
import { Children } from "react";

function XVertical(props) {
  let classList = ["x-vertical"]
  return <div className={classList.join(" ")}>
    {Children.map(props.children, child => <div className="x-vertical-children">
      {child}
    </div>)}
  </div>;
}

export {XVertical};
