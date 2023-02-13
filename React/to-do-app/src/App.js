import './App.css';
import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const [todoList, setToDoList] = useState([]);

  /* Update input state */
  const handleChange = event => {
    setInput(event.target.value)
  }

  /* Create new to do */
  const handleClick = event => {
    /* If input is empty, don't create a new to do*/
    if (!input) {
      alert("Input is empty, enter something")
      return;
    }

    /* Associate the todo to an ID so we can delete it */
    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: input
    }

    /* Update the list */
    setToDoList(oldList => [...oldList, todo]);
    setInput('');
  }

  /* Delete to do */
  function deleteItem(id) {
    const newArray = todoList.filter(item => item.id !== id);
    setToDoList(newArray);
  }


    return (
      <>
      {/* 1. Header */}
        <h1>To do list</h1>

      {/* 2. Input */}
        <input  type='text' 
                placeholder="Add a todo"
                value={input} 
                className="todo-input"
                onChange={handleChange} />
        <button className="input-button"
                onClick={handleClick}/>

      {/* 3. Output */}
        <ul className="output">
          {todoList.map(item => { return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)} />
            </li>
          )})}
        </ul>
      </>
    )
}

export default App;
