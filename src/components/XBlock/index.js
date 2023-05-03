import "./scss/stylesheet.scss";

export {FormGrid, FormLabel} from "./components/form-template";
export {XRaw} from "./components/x-raw";
export {XList} from "./components/x-list";

export default function XBlock(props) {
  return <div className="x-block">{props.children}</div>;
}