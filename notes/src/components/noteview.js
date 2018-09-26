import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
class NoteView extends React.Component {
  state = {
    id: this.props.match.params.id,
    notes:[]
  };


  render() {
    return (
      <div>
        <div>
            {this.state.notes.map(note => (
               <div key={note.id}> {note.title} {note.content}
                 <div><Link to={`/edit/${note.id}`}><button>Edit</button></Link>
                 <button onClick={(e) => this.props.deleteNote(e, this.state.id)}>Delete</button></div>
               </div>
            ))}
            
        </div>
      </div>
    );
  }

   componentDidMount() {

    axios
      .get(`http://localhost:3300/api/notes/${this.state.id}`)
      .then(res => {
        this.setState({notes: res.data})
      })
      .catch(err => {
        console.error(err);
      });
  };
}

/* const NoteView = props => {
  const note = props.noteList.find(
    eachNote => eachNote._id === Number(props.match.params.id)
  );
  return (
    <div>
      <div>
        {console.log(note)}
        <div key={note._id}>
          <div>{note.tags}</div>
          <div>{note.title}</div>
          <div>{note.textBody}</div>
        </div>
        <Link to={`/edit/${note._id}`}><button>Edit</button></Link>
        <Link to={'/'}><button onClick={props.deleteNote}>Delete</button></Link>
      </div>
    </div>
  );
}; */

export default NoteView;
