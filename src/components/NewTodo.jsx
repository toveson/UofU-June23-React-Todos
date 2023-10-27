import PropTypes from "prop-types";

export const NewTodo = (props) => {
  const { newTodo, setNewTodo, handleSave } = props;

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
};

NewTodo.propTypes = {
  newTodo: PropTypes.string.isRequired,
  setNewTodo: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};
