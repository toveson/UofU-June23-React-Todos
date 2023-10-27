// TODO: somewhere to display todos
// TODO: get todos from local storage
// TODO:
// TODO:

import { useEffect, useState } from "react";

export const DisplayTodos = () => {
  const [existingTodos, setExistingTodos] = useState([]);

  useEffect(() => {
    setExistingTodos(JSON.parse(localStorage.getItem("TODOS")) || []);
  }, []);

  console.log(existingTodos);

  return (
    // code goes here
    <ul>
      {existingTodos.map((todo, key) => (
        <li key={key} style={{margin: "5px"}}>
          {todo}
          <button style={{marginLeft: "10px"}} onClick={() => console.log(key)}>X</button>
        </li>
      ))}
    </ul>
  );
};
