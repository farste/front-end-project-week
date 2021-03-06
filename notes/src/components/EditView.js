import React from 'react'

const EditView = (props) => {


    return (
        
      <form onSubmit={props.editNote}>
        {console.log(props)}
        <input
          onChange={props.handleInputChange}
          placeholder="title"
          value={props.title}
          name="title"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="tags"
          value={props.tags}
          name="tags"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="body"
          value={props.textBody}
          name="textBody"
        />
        <button>Submit</button>
      </form>
    );
  
}

export default EditView;