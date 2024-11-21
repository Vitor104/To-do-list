
import './App.css';
import React, {useState} from 'react';
import ToDoList from './components/toDoList/toDoList';
import ToDoForm from './components/toDoForm/toDoForm';


function App() {
  

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
    return (

    <div className="App">
      <h1>My To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      
    </div>
  );
}

export default App;
