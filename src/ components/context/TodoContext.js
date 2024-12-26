import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export const TodoProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
