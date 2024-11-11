import React from 'react';
import styles from './toDoItem.module.css';

function ToDoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className={styles.li}>
      <span 
        onClick={() => toggleComplete(todo.id)} 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        <p>{todo.text}</p>
      </span>
      <button onClick={() => deleteTodo(todo.id)} type="button" class="btn btn-danger">Delete</button>
    </li>
  );
}

export default ToDoItem;
