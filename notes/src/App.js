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
      this.setState({
        title: "",
        content: ""
      })
    );
  };

  editNote = (e, id) => {
    e.preventDefault();
    console.log(id)
    axios.put(`${host}/${id}`, this.state).then(
      this.setState({
        title: "",
        content: ""
      })
    );
  };
  deleteNote = (e, id) => {
    e.preventDefault();
    axios.delete(`${host}/${id}`, id).then(
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
              title={this.state.title}
              content={this.state.content}
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
              newNote={this.newNote}
              content={this.state.content}
              title={this.state.title}
            />
          )}
        />

        <Route
          exact
          path="/notes/:id"
          render={props => <NoteView {...props} deleteNote={this.deleteNote} />}
        />

        <Route
          exact
          path="/edit/:id"
          render={props => (
            <EditView
              {...props}
              title={this.state.title}
              content={this.state.content}
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
