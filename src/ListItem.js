import React from "react";
import { Complete } from "./Complete";

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange(complete) {
    if (complete) {
      this.props.onCompleteChange(this.props.value, "add");
    } else if (!complete && this.props.onCompleteChange.length > 0) {
      this.props.onCompleteChange(this.props.value, "remove");
    }
    this.setState({ complete });
  }

  render() {
    return (
      <span>
        <Complete
          className="listItem"
          complete={this.state.complete}
          onButtonChange={this.handleButtonChange}
        />
        <li
          className={`${
            this.state.complete ? "listItem linethrough" : "listItem noline"
          }`}
        >
          {this.props.value}
        </li>
        <br />
      </span>
    );
  }
}

export default ListItem;
