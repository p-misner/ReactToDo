import React from "react";

export class InputField extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.props.onValueChange(event.target.value);
		event.preventDefault();
	}

	handleSubmit(event) {
		this.props.onSubmitChange(this.props.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input type="text" id="in" onChange={this.handleChange} />
				</label>
			</form>
		);
	}
}

export default InputField;
