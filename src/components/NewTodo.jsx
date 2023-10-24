// // TODO: Place to enter todo
// TODO: need buttons for saving the todo, deleting the todo
// TODO: empty lists (where todos will go)
// TODO: make it so we can delete todos
import { useEffect, useState } from "react";

// TODO: Save todos to local storage

function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const [existingTodos, setExistingTodos] = useState([]);

  useEffect(() => {
    setExistingTodos(JSON.parse(localStorage.getItem("TODOS")) || []);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const todos = [...existingTodos, newTodo];
    setExistingTodos(todos);

    localStorage.setItem("TODOS", JSON.stringify(todos));
  };

  console.log(existingTodos);

  return (
    <form>
      <label type="text">enter todo</label>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={handleSave}
        style={{ borderRadius: "10px" }}
      >
        Save TODO
      </button>
    </form>
  );
}

export default NewTodo;
