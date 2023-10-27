import { useEffect, useState } from "react";
import { NewTodo } from "../components/NewTodo";
import { DisplayTodos } from "../components/DisplayTodos";

function Dashboard() {
  const [newTodo, setNewTodo] = useState("");
  const [existingTodos, setExistingTodos] = useState([]);
  const [refreshTodos, setRefreshTodos] = useState(0)

  useEffect(() => {
    setExistingTodos(JSON.parse(localStorage.getItem("TODOS")) || []);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const todos = [...existingTodos, newTodo];
    setExistingTodos(todos);
    setNewTodo("");

    localStorage.setItem("TODOS", JSON.stringify(todos));
  };

  const handleDelete = (key) => {
    console.log(existingTodos);
    const itemToBeRemoved = key;
    const updatedTodos = existingTodos.filter(
      (element, index) => index !== itemToBeRemoved
    );
    console.log(updatedTodos);
    localStorage.setItem("TODOS", JSON.stringify(updatedTodos));
    setRefreshTodos(refreshTodos + 1)
  };

  return (
    <>
      <NewTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSave={handleSave}
      />
      <DisplayTodos
        existingTodos={existingTodos}
        handleDelete={handleDelete}
        refreshTodos={refreshTodos}
        setExistingTodos={setExistingTodos}
      />
    </>
  );
}

export default Dashboard;
