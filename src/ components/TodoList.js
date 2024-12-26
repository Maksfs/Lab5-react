import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../context/TodoContext';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
