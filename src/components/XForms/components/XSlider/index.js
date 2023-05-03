import React from "react";
import "./scss/x-slider.scss";
import { handleChange } from "../../../../shared/utils";

class XSlider extends React.Component {
  state = {
    value: this.props.min,
  };

  setValue = (value) => {
    if (this.props.min <= value && value < this.props.max) {
      this.props.setValue(value);
      this.setState({
        value: value,
      });
    }
  };

  render() {
    return (
      <div className="x-slider">
        <div className="x-slider-input">
          <input
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.state.value}
            onChange={handleChange(this.setValue)}
          />
        </div>
        <div className="x-slider-output">{this.state.value}</div>
        {this.props.currency ? (
          <div className="x-slider-currency"> {this.props.currency || ""} </div>
        ) : (
          <> </>
        )}
      </div>
    );
  }
}

export {XSlider};
