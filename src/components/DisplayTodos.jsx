// TODO: somewhere to display todos
// TODO: get todos from local storage
// TODO:
// TODO:

import PropTypes from "prop-types";

export const DisplayTodos = (props) => {
  const { existingTodos } = props;

  return (
    // code goes here
    <ul>
      {existingTodos.map((todo, key) => (
        <li key={key} style={{ margin: "5px" }}>
          {todo}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => console.log(key)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

DisplayTodos.propTypes = {
  existingTodos: PropTypes.string.isRequired,
};
