// // TODO: Place to enter todo
// TODO: need buttons for saving the todo, deleting the todo
// TODO: empty lists (where todos will go)
// TODO: make it so we can delete todos
import { useState } from "react";

// TODO: Save todos to local storage

function App() {
  const [newTodo, setNewTodo] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("hit");
    localStorage.setItem("TODOS", newTodo);
  };

  console.log(newTodo);

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

export default App;
