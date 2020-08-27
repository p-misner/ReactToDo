import React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { List } from "./List";
import "./App.css";

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      submit: [],
      completeList: [],
      showComplete: "all",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.handleClearArray = this.handleClearArray.bind(this);
    this.handleClearComplete = this.handleClearComplete.bind(this);
    this.handleCompleteChange = this.handleCompleteChange.bind(this);
    this.handleShowComplete = this.handleShowComplete.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleShowActive = this.handleShowActive.bind(this);
  }

  handleCompleteChange(value, stage) {
    let array = this.state.completeList;

    if (stage === "add") {
      array = array.concat(value);
      this.setState({
        completeList: array,
      });
    } else if (stage === "remove") {
      array = array.filter((item) => item !== value);
      this.setState({
        completeList: array,
      });
    }
  }

  onValueChange(value) {
    this.setState({ value });
  }

  onSubmitChange(event) {
    const list = this.state.submit.concat(this.state.value);
    this.setState(() => {
      return {
        submit: list,
        value: "",
      };
    });
  }

  handleClearArray() {
    this.setState({ submit: [], completeList: [] });
  }

  handleClearComplete() {
    var da = arr_diff(this.state.submit, this.state.completeList);
    this.setState({ submit: da, completeList: [] });
  }

  handleShowComplete() {
    this.setState({
      showComplete: "complete",
    });
  }

  handleShowAll() {
    this.setState({
      showComplete: "all",
    });
  }
  handleShowActive() {
    this.setState({
      showComplete: "active",
    });
  }
  render() {
    const submit = this.state.submit;
    const value = this.state.value;
    return (
      <div className="input">
        <h2> To Do </h2>
        <InputField
          submit={submit}
          value={value}
          onValueChange={this.onValueChange}
          onSubmitChange={this.onSubmitChange}
        />
        <List
          fill={submit}
          completeList={this.handleCompleteChange}
          completeArray={this.state.completeList}
          showComplete={this.state.showComplete}
        />
        <Button text="Clear All" onClick={this.handleClearArray} />
        <Button text="Clear Complete" onClick={this.handleClearComplete} />
        <Button text="Show All" onClick={this.handleShowAll} />
        <Button text="Show Complete" onClick={this.handleShowComplete} />
        <Button text="Show Active" onClick={this.handleShowActive} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InputArea />
        </header>
      </div>
    );
  }
}

export default App;

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
