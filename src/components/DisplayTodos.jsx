// TODO: somewhere to display todos
// TODO: get todos from local storage
// TODO:
// TODO:

import PropTypes from "prop-types";
import { useEffect } from "react";

export const DisplayTodos = (props) => {
  const { existingTodos, handleDelete, refreshTodos, setExistingTodos } = props;

  useEffect(() => {
    setExistingTodos(JSON.parse(localStorage.getItem("TODOS")) || []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshTodos]);

  return (
    <ul>
      {existingTodos.map((todo, key) => (
        <li key={key} style={{ margin: "5px" }}>
          {todo}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(key)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

DisplayTodos.propTypes = {
  existingTodos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  refreshTodos: PropTypes.number.isRequired,
  setExistingTodos: PropTypes.func.isRequired,
};
