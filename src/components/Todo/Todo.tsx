import { Provider } from "react-redux";
import { store } from "../../app/store";
import Todoinput from "./Todoinput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";

const Todo = () => {
  return (
    <Provider store={store}>
      <div className="w-3/4 p-3 mx-auto my-24 align-middle bg-transparent md:w-1/2">
        <h1 className="text-4xl font-semibold text-center text-gray-500 my-2">
          THINGS TO DO
        </h1>
        <Todoinput />
        <TodoList />
        <TodoStats />
      </div>
    </Provider>
  );
};

export default Todo;
