import React from "react";

const CreateNew = (props) => {


    return (
        
     <form onSubmit={props.newNote}>
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

export default CreateNew;
