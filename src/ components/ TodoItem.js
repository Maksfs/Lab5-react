import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateTodo({
            ...todo,
            name: 'Updated Task Name' // Приклад
        }));
    };

    return (
        <div>
            <span>{todo.name}</span>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default TodoItem;
