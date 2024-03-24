import { useSelector, useDispatch } from "react-redux";
import { todoTypes, doneTodo } from "../../features/todo/todoSlice";

// type todoTypes = {
//   id: string;
//   task: string;
//   isDone: boolean;
// };

function TodoList() {
  const todos = useSelector((state: { todos: todoTypes[] }) => state.todos);

  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {todos.length >= 1 &&
          todos.map((todo: todoTypes, idx: number) => (
            <li key={todo.id} className={`flex align-middle py-2 ${idx < todos.length - 1 ? "border-b" : ""}`}>
              <input
                className="cursor-pointer"
                type="checkbox"
                name=""
                id=""
                checked={todo.isDone}
                onChange={() => dispatch(doneTodo(todo.id))}
              />
              <span
                className="text-sm mx-2"
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoList;
