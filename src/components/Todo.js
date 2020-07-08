import React from "react";

export default (props) => (
    
    <div style={{display: 'flex'}}>
  <div
    style={{
      textDecoration: props.todo.complete ? "line-through" : ""
    }}
    onClick={props.toggleComplete}
  >
    {props.todo.text}
  </div>
  <button className="btn btn-sm btn-danger m-2" onClick={props.onDelete}>usuń</button>
  </div>
);
