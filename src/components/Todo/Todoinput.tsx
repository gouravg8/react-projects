import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import { useState } from "react";
useState;
function Todoinput() {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput) {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} id="todoForm">
      <input
        className="w-full border text-normal py-1 px-3 focus:outline-blue-400 my-2"
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Add New"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </form>
  );
}

export default Todoinput;
