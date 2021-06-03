import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const addToDo = () => {};
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDo}>Add </button>
    </div>
  );
};

export default Input;
