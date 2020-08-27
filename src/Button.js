import React from "react";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }
  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
