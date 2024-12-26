import React from 'react';
import { TodoProvider } from './src/context/TodoContext';
import TodoList from './src/components/TodoList';
import TodoItem from './src/components/TodoItem';


function App() {
    return (
        <TodoProvider>
            <div className="App">
                <h1>Todo Manager</h1>
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
