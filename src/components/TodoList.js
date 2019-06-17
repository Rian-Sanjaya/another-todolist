import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../actions/todoAction'

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type='checkbox'
      checked={isComplete}
      onChange={() => toggleTodo(id)} 
    />
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className='Todo-List'>
        <ul>
          {this.props.todos.map( todo => (
            <TodoItem key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state.todo.todos, props.filter)
  }
}

const mapActionsToProps = {
  fetchTodos,
  toggleTodo,
  deleteTodo
}

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(TodoList)