import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from "react-router-dom";
import Sidebar from './components/sidebar';
import Listview from './components/listview';
import './App.css';


class App extends Component {
  constructor() {
  super();
  this.state={
    noteList: [
    {tags: ["test tag", "test tag1"],
    title: "test title",
    textBody: "test body"},
    {tags: ["test tag 2", "test tag 3"],
    title: "test title 1",
    textBody: "test body 1"},
    ]
  }
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Listview 
        tags={this.state.noteList.tags}
        title={this.state.noteList.title}
        textBody={this.state.noteList.textbody}
        noteList={this.state.noteList}
        />
      </div>
    );
  }
}

export default App;
