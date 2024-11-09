import React from 'react';
import ToDoItem from '../toDoItem/toDoItem';
import styles from './toDoList.module.css';

function ToDoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className={styles.ul}>
    {todos.map(todo => (
      <ToDoItem 
        key={todo.id} 
        todo={todo} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete} 
      />
    ))}
  </ul>
  );
}

export default ToDoList;
