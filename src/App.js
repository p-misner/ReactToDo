import React from 'react';
import './App.css';


class InputField extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.props.onValueChange(event.target.value);
    event.preventDefault();
    console.log(this.props.value);

  }

  handleSubmit(event){
    this.props.onSubmitChange(this.props.value)
    event.preventDefault();

  }

  render() {

    return(
     <form  onSubmit={this.handleSubmit}>
        <label >To Do <br/>
          <input type="text" id="in" onChange={this.handleChange} />
        </label>
      </form>
      
    ); 
  } 
}

class List extends React.Component {
 
  render(){
    const items = this.props.fill;
    const listItems = items.map((item,index)=>
      <ListItem key={(item + index)} value={item}  />    
    );
    
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
  
}

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {complete: false}
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange(complete){
    this.setState({complete})
  }

  render(){
    return (<span>
      <Complete className="listItem" complete={this.state.complete} onButtonChange={this.handleButtonChange} />  
        <li className={this.state.complete ? " listItem linethrough" : "listItem noline"}>{this.props.value}</li>
        <br/> 
      </span>
    );

  }

}

class Complete extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onButtonChange(!this.props.complete)
    // this.props.complete =  !bool;
  }
  render(){
    return(
      <span><button className={this.props.complete ? 'complete' : 'notcomplete'} onClick={this.handleClick}> </button> </span>
      );
  }

}

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.props.onClick();
  }
  render(){
    return <button type="button" onClick={this.handleClick}>{this.props.text}</button>
  }
}



class InputArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:'', submit:[], toClear:false};
    this.onValueChange =  this.onValueChange.bind(this);
    this.onSubmitChange =  this.onSubmitChange.bind(this);
    this.handleClearArray =  this.handleClearArray.bind(this);
    this.handleClearComplete =  this.handleClearComplete.bind(this);
  }
   

  onValueChange(value) {
    this.setState({value});
  }
  
  onSubmitChange(submit,i){
    this.setState(()=>{
      const list = this.state.submit.concat(this.state.value);
      return {
        submit:list,
        value:'...',
        toClear:false,
      };
    });
  }

  handleClearArray() {
    this.setState({submit:[]})
  }

  handleClearComplete() {
    console.log("clear complete");
    this.setState({toClear:true});
  }

  render(){
    const submit = this.state.submit;
    const value = this.state.value;
    const toClear = this.state.toClear;
    return(
      <div className="input">
        <InputField submit={submit} value={value} onValueChange={this.onValueChange} onSubmitChange={this.onSubmitChange} />
        <List fill={submit} toClear={toClear}/>
        <Button text="Clear All" onClick={this.handleClearArray}/>
        <Button text="Clear Complete" onClick = {this.handleClearComplete} />
        <Button text="Show All" />
        <Button text="Show Complete" />
        <Button text="Show Active" />
       
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




