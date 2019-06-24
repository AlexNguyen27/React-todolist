import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        // [e.target.name]: can use for many attribute in state
        // We don't need to call onChange many time
        // Whatever it equal to the name of the input
        // In this case is title
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        // stop submit to the actual file 
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add todo..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                ></input>

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                ></input>
            </form>

        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
