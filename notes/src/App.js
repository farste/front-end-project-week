import React, { Component } from "react";
import logo from "./logo.svg";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ListView from "./components/ListView";
import CreateNew from "./components/CreateNew";
import NoteView from "./components/NoteView";
import EditView from "./components/EditView";
import "./App.css";
import axios from "../../node_modules/axios";
const host = "http://localhost:3300/api/notes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newNote = e => {
    e.preventDefault();
    axios.post(host, this.state).then(
      console.log(this.state),
      this.setState({
        title: "",
        content: ""
      }),
    );
  };

  editNote = e => {
    e.preventDefault();
    axios.put(host, this.state).then(
      this.setState({
        title: "",
        content: ""
      })
    );
  };
  deleteNote = e => {
    e.preventDefault();
    axios.delete(host).then(
      this.setState({
        title: "",
        content: ""
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => (
            <ListView
              {...props}
              tags={this.state.noteList.tags}
              _id={this.state.noteList._id}
              title={this.state.noteList.title}
              content={this.state.noteList.content}
              noteList={this.state.noteList}
            />
          )}
        />

        <Route
          exact
          path="/new"
          render={props => (
            <CreateNew
              {...props}
              handleInputChange={this.handleInputChange}
              noteList={this.state.noteList}
              newNote={this.newNote}
              content={this.state.content}
              tags={this.state.tags}
              title={this.state.title}
            />
          )}
        />

        <Route
          exact
          path="/notes/:id"
          render={props => (
            <NoteView
              {...props}
              noteList={this.state.noteList}
              deleteNote={this.deleteNote}
            />
          )}
        />

        <Route
          exact
          path="/edit/:id"
          render={props => (
            <EditView
              {...props}
              noteList={this.state.noteList}
              title={this.state.title}
              content={this.state.content}
              tags={this.state.tags}
              handleInputChange={this.handleInputChange}
              editNote={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
