// // TODO: Place to enter todo
// TODO: need buttons for saving the todo, deleting the todo
// TODO: empty lists (where todos will go)
// TODO: make it so we can delete todos
// TODO: Save todos to local storage

import Completed from "./views/Completed";
import Dashboard from "./views/Dashboard";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  return (
    <>
      <button onClick={() => setCurrentPage("Dashboard")}>My Todos</button>
      <button onClick={() => setCurrentPage("Completed")}>
        Completed Todos
      </button>
      {currentPage === "Dashboard" && <Dashboard />}
      {currentPage === "Completed" && <Completed />}
    </>
  );
}

export default App;
