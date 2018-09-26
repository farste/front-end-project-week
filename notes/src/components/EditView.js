import React from 'react'

const EditView = (props) => {


    return (
        
      <form onSubmit={(e) => props.editNote(e, props.match.params.id)}>
        <input
          onChange={props.handleInputChange}
          placeholder="title"
          value={props.title}
          name="title"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="body"
          value={props.content}
          name="content"
        />
        <button>Submit</button>
      </form>
    );
  
}

export default EditView;