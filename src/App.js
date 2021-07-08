import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import AddTodo from "./MyComponents/addTodo"
import About from "./MyComponents/About"
import React, { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
    var initTodo;
    if(localStorage.getItem("todos")===null){
      initTodo=[];
    }
    else
    {
      initTodo=JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo)=>{
      console.log("I am onDelete " , todo);
      // deleting this way in react will not work!!!!
      // let ind=todos.indexOf(todo);
      // todos.splice(ind,1);
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    const addTodo = (title,desc)=>{
      console.log("I am Adding ",title,desc);
      var sno;
      if(todos.length===0)
      {
        sno=0;
      }
      else
      {
        sno=todos[todos.length-1].sno +1;
      }
      const myTodo={
        sno:sno,
        title:title,
        desc:desc
      }
      setTodos([...todos,myTodo]);// adding our myTodo to todos
    }
    const [todos,setTodos] = useState(initTodo);
    // to hold on the changes in local machine
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));// updating the todos on local machine
    }, [todos]);

    return (
      <>
      <Router>
        <Header title="My Todo List" about={true}/>
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </>
    );
}

export default App;
