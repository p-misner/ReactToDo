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
				items = arr_diff(this.props.fill, this.props.completeArray);
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

		return <ul>{listItems}</ul>;
	}
}

export default List;

function arr_diff(a1, a2) {
	var a = [],
		diff = [];

	for (var i = 0; i < a1.length; i++) {
		a[a1[i]] = true;
	}

	for (var i = 0; i < a2.length; i++) {
		if (a[a2[i]]) {
			delete a[a2[i]];
		} else {
			a[a2[i]] = true;
		}
	}

	for (var k in a) {
		diff.push(k);
	}

	return diff;
}
