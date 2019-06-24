import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    // When we check it will call whatever markComplete here
    // Comment this out cuz we gonna use it in App
    // markComplete = () => {
    //     console.log('hello')
    // }

    render() {
        // console.log(this.props.todos)
        // each map have a unique key
        const elmtodo = this.props.todos.map((todo) => {
            return <TodoItem
                key= {todo.id}
                todo={todo}
                // Cuz we gonna go to App so we gonna set this.props.markComplete
                markComplete = {this.props.markComplete}
                delTodo = {this.props.delTodo}
            />
        })
        return (
            <div> 
                {elmtodo}
            </div>
        );

    }
}

// Proptypes 
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;