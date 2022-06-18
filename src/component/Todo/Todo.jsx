import { useEffect, useState } from "react";
import "./todo.css";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const addTodo = () => {
    todoList.findIndex((item) => item.todo === input) === -1 &&
      setTodoList((x) => [...x, { todo: input, checked: false }]);
    setInput("");
  };

  const toggleChecked = (x) => {
    setTodoList((todoList) =>
      todoList.map((curr) =>
        curr.todo === x.todo ? { ...curr, checked: !curr.checked } : curr
      )
    );
  };

  const deleteCheckedTodo = () => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.checked === false)
    );
  };

  useEffect(
    () => localStorage.setItem("todo", JSON.stringify(todoList)),
    [todoList]
  );

  return (
    <div className='todo-wrapper'>
      <div className='todo-heading'>Todo List</div>
      <input
        className='todo-input'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>
          e.code === "Enter" && e.target.value !== "" && addTodo()
        }
        value={input}
      />
      <div className='list-display'>
        {todoList.map((item, index) => (
          <label
            key={index}
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
          >
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => toggleChecked(item)}
            />
            {item.todo}
          </label>
        ))}
      </div>
      {todoList.length > 0 && (
        <button
          className='delete-completed-btn'
          onClick={() => deleteCheckedTodo()}
        >
          Delete Completed
        </button>
      )}
    </div>
  );
};
export { Todo };
