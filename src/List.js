import React from "react";
import { ListItem } from "./ListItem";

export class List extends React.Component {
	constructor(props) {
		super(props);
		this.onCompleteChange = this.onCompleteChange.bind(this);
	}

	onCompleteChange(value, stage) {
		this.props.completeList(value, stage);
	}

	render() {
		let items;
		switch (this.props.showComplete) {
			case "all":
				items = this.props.fill;
				break;
			case "complete":
				items = this.props.completeArray;
				break;
			case "active":
				items = this.props.activeList;
				break;
			default:
				items = this.props.fill;
				break;
		}
		const listItems = items.map((item, index) => (
			<ListItem
				key={item}
				value={item}
				onCompleteChange={this.onCompleteChange}
			/>
		));

		return (
			<div className="listHolder">
				<ul>{listItems}</ul>
			</div>
		);
	}
}

export default List;
