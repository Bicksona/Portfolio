import React, { Component } from "react";
import "./style.css";

export class NewLine extends Component {
  state = {
    id: this.props.line.id,
    value: this.props.line.value,
    displayInput: this.props.line.displayInput
  };

  render() {
    return (
      <React.Fragment>
        <p className={this.badgeChange()}>
          {this.props.displayInput && (
            <input
              type="text"
              className="here"
              ref={this.props.inputRef} 
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handelEnter}
            />
          )}
          {this.state.value}
        </p>
      </React.Fragment>
    );
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handelEnter = (event) => {
    if (event.key === "Enter") {
      this.props.handelWhatever(event.target.value, this.state.id);
    }
  };

  badgeChange() {
    let badge = "prompt ";
    badge += this.props.displayInput ? "output new-output" : "";
    return badge;
  }
}

export default NewLine;
