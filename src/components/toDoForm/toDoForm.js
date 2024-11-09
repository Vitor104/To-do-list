import React, { useState } from 'react';
import styles from './toDoForm.module.css';

function ToDoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (

    <form class="input-group mb-3" onSubmit={handleSubmit}>
    <div class="input-group-prepend">
      <button class="btn btn btn-dark" type="submit" id="button-addon1">Add</button>
    </div>
    <input type="text" class="form-control" placeholder="Add a new task" aria-label="Example text with button addon" aria-describedby="button-addon1" value={text} onChange={(e) => setText(e.target.value)}></input>
  </form>

    /*
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <br></br>
      <button type="submit" class="btn btn-light">Light</button>
      
    </form>
    */
  );
}

export default ToDoForm;
