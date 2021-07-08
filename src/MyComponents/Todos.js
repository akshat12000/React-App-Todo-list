import React from 'react';
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>
      {props.todos.length===0? "No Todos To Display! All done!":
      props.todos.map((todo)=>{
        return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
