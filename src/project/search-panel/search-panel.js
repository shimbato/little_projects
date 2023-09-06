import React, { Component } from "react";
import './search-panel.css'


export class SearchPanel extends Component {
constructor(props) {
  super(props);
this.state ={
  term: ''
}}

onUpdateSearch =(e)=>{
  const term = e.target.value; // эт локальное 
  this.setState({term});
  this.props.onUpdateSearch(term); // эта часть из app.js приходит
}

render() {
  return (
    <>
      <input 
          type="text"
          className="form-control search-input"
          placeholder="Найти сотрудника"
          value={this.state.term}
          onChange={this.onUpdateSearch}/>
    </>
  );
}
};
