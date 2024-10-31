import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import TodoListItem from './TodoListItem'

const selectTodos = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodos, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => (
    <TodoListItem key={todoId} id={todoId} />
  ))

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
