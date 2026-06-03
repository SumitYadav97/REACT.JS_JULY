import { useReducer, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function todoReducer(state, action) {
  switch (action.type) {
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "ADD_ITEM":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "COMPLETED_ITEM":
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      ); 
    default:
      return state;
  }
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      alert("enter something!");
      return;
    }
    dispatch({ type: "ADD_ITEM", payload: input });
    setInput("");
  };

  return (
    <div className="card shadow-sm" style={{ width: "35rem", margin: "20px auto" }}>
      <div className="card-body">
        <h5 className="card-title mb-4">ToDo List</h5>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter List Item Names"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button variant="outline-primary" onClick={handleAdd}>
            Add Task
          </Button>
        </div>

        <ul className="list-group">
          {todos.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div
                className="d-flex align-items-center flex-grow-1"
                onClick={() => dispatch({ type: "COMPLETED_ITEM", payload: item.id })}
              >

                <Form.Check type="checkbox" checked={item.completed} readOnly className="me-3 custom-checkbox" />
                <span style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "#6c757d" : "black"
                }}>
                  {item.text}
                </span>
              </div>

              <Button variant="danger" size="sm" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          .custom-checkbox input {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            cursor: pointer;
        }

          .custom-checkbox input:checked {
            background-color: #198754;
            border-color: #198754;
          }
          `}
                </style>
              </div>
  );
};

export default TodoList;