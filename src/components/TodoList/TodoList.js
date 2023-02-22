import React from 'react';
  
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="todoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="todoItem">
        <p className="todoText">{text}</p>
        <button onClick={() => onDeleteTodo(id)} 
        className="todoBtn">
          completed
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
