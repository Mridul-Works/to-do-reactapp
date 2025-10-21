import React, { useState } from 'react';
import "../style/inputForm.css";

const InputForm = () => {
  const [toDoList, setToDoList] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();

    const toName = event.target.elements.toName.value.trim();

    if (toDoList.includes(toName)) {
      alert("TODO name already exists");
    } else {
      const finalToDoList = [...toDoList, toName];
      setToDoList(finalToDoList);
      console.log(finalToDoList);
    }

    // clear the input after saving
    event.target.reset();
  };

  return (
    <div className="inputForm">
      <h2>Input</h2>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toName" placeholder="Enter task..." required />
        <button type="submit">Save</button>
      </form>

      <div className="outerDiv">

      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>{item}  <span >&times;</span></li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default InputForm;
