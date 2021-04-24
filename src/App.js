import React, { useState } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addtodo = (e) => {
    // this is process when we click the button
    e.preventDefault(); //it will stop the refresh
    console.log(input);
    setTodos([...todos, input]);
    setInput("");
  };

  const deletetodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TO DO APP 📝</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write todo's t add</InputLabel>
          <Input autoFocus={true} value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addtodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <div className="todolist">
            <Todo key={index.toString()} todo={todo} />
            <DeleteForeverIcon fontSize="large" onClick={() => deletetodo(index)} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
