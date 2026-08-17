import { useState, useEffect } from "react";
import api from "../services/api";

function Todo() {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    const loadTodos = async () => {

        const response = await api.get("/Todo");

        setTodos(response.data);
    };

    const addTodo = async () => {

        if (!title.trim()) return;

        await api.post("/Todo", {
            title
        });

        setTitle("");

        loadTodos();
    };

    const completeTodo = async (id) => {

        await api.put(`/Todo/${id}`);

        loadTodos();
    };

    const deleteTodo = async (id) => {

        await api.delete(`/Todo/${id}`);

        loadTodos();
    };

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div className="container mt-5">

            <h1 className="text-white mb-4">
                My Tasks
            </h1>

            <div className="card p-3 mb-4">

                <div className="row">

                    <div className="col-md-9">

                        <input
                            className="form-control"
                            placeholder="Add new task"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)}
                        />

                    </div>

                    <div className="col-md-3">

                        <button
                            className="btn btn-success w-100"
                            onClick={addTodo}
                        >
                            Add Task
                        </button>

                    </div>

                </div>

            </div>

            <div className="row">

                {todos.map((todo) => (

                    <div
                        key={todo.id}
                        className="col-md-4 mb-3"
                    >

                        <div className="card todo-card">

                            <div className="card-body">

                                <h5>{todo.title}</h5>

                                <span
                                    className={
                                        todo.isCompleted
                                            ? "badge bg-success"
                                            : "badge bg-warning text-dark"
                                    }
                                >
                                    {
                                        todo.isCompleted
                                            ? "Completed"
                                            : "Pending"
                                    }
                                </span>

                                <div className="mt-3">

                                    <button
                                        className="btn btn-success me-2"
                                        onClick={() =>
                                            completeTodo(todo.id)}
                                    >
                                        Complete
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            deleteTodo(todo.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Todo;