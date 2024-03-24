import { useSelector } from "react-redux";
import { todoTypes } from "../../features/todo/todoSlice";

function TodoStats() {
  const todos = useSelector((state: { todos: todoTypes[] }) => state.todos);
  const done = useSelector(
    (state: { doneTodoLength: number }) => state.doneTodoLength
  );
  return (
    <div className="flex justify-center px-6 text-gray-500 bg-green-100 py-2 text-sm border">
      <span>{todos.length - done} items left</span>
    </div>
  );
}

export default TodoStats;
