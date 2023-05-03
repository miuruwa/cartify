import React from "react";
import "./scss/x-field.scss";

class XField extends React.Component {
  state = {
    field: this.props.field,
    focus: false,
  };

  icon = () => {
    return <div className="x-field-icon">
      <div className="x-field-icon-wrap">
        {this.props.icon || null}
      </div>
    </div>;
  };

  field = () => {
    return (
      <div
        className="x-field-input"
        ref={(input) => {
          this.textField = input;
        }}
        onFocus={this.onFocusIn}
        onBlur={this.onFocusOut}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={(e) => this.props.setField(e.target.innerHTML)}
        data-placeholder={this.props.children}
      >
        {this.state.field}
      </div>
    )
  }

  focusField = () => {
    this.textField.focus();
  };

  onFocusIn = () => {
    this.setState({focus: true})
  }

  onFocusOut = () => {
    this.setState({focus: false})
  }

  componentDidMount() {
    this.setState({
      field: this.props.field,
    })
  }

  componentWillUnmount() {
    this.setState({
      field: "",
    })
  }

  render() {
    this.classList = ["x-field"]
    if (this.state.focus) {
      this.classList.push("selected")
    }
    if (this.props.flexlist) {
      this.classList.push("max-list")
    }
    if (this.props.noWrap) {
      this.classList.push("no-wrap")
    }
    return (
      <div className={this.classList.join(" ")} onClick={this.focusField}>
        <this.icon />
        <this.field />
      </div>
    );
  }
}

export {XField};
