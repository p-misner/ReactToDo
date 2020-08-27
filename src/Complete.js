import React from "react";

export class Complete extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onButtonChange(!this.props.complete);
	}
	render() {
		return (
			<span>
				<button
					className={this.props.complete ? "complete" : "notcomplete"}
					onClick={this.handleClick}
				>
					{" "}
				</button>{" "}
			</span>
		);
	}
}
