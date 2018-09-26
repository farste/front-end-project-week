import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListView extends React.Component {
  state = {
    notes:[]
  };

  render() {
    return (
      <div>
        <div>
            {this.state.notes.map(note => (
                <Link to={`/notes/${note.id}`}><div key={note.id}> {note.title} {note.content}{console.log(note.id)}</div></Link>
            ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:3300/api/notes")
      .then(res => {
        this.setState({notes: res.data})
      })
      .catch(err => {
        console.error(err);
      });
  };
}


/* const ListView = props => {
  return (
    <div>
      {props.noteList.map((notes, i) => {
        return (
          <Link to={`/notes/${notes._id}`}>
            <div key={i}>
              <div>{notes.tags}</div>
              <div>{notes.title}</div>
              <div>{notes.content}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}; */

export default ListView;
