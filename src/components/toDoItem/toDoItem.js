import React from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li>
      <span 
        onClick={() => toggleComplete(todo.id)} 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
