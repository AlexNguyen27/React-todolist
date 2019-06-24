import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
// import uuid from 'uuid'
import About from './components/pages/About'
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  // npm i axios : for using API JSONtodo, it's a http library  
  // this life cicle run right after the componentaMount
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=9`)
      .then(res => this.setState({ todos: res.data }));
  }

  
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add todo
  addTodo = (title) => {
    // const newTodo = {
    //   // npm install uuid
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header></Header>

            <Route exact path="/" render={props => (

              <React.Fragment>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                {/* pass the todo props into this Todos */}
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>

            )}></Route>

            <Route path="/about" component={About} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
