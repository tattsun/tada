import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: '1', text: 'Hello, world' },
    { id: '2', text: 'Foobar' },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
});

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.todos;
