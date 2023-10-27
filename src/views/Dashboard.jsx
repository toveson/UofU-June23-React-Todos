import { useEffect, useState } from "react";
import { NewTodo } from "../components/NewTodo";
import { DisplayTodos } from "../components/DisplayTodos";

function Dashboard() {
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

  return (
    <>
      <NewTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSave={handleSave}
      />
      <DisplayTodos existingTodos={existingTodos} />
    </>
  );
}

export default Dashboard;
