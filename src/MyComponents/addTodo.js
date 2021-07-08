import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const submit = (e)=>{
    e.preventDefault(); // to prevent page from reloading
    if(!title||!desc){
      alert("Title or Description should not be empty!!");
    }
    else
    {
      props.addTodo(title,desc);
    }
  }
  return (
    <div className="container my-3">
    <form onSubmit={submit}>
    <h4 className="text-center">Add a Todo Item</h4>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Description</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
    </form>
    </div>
  )
}
