import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: '1', text: 'Hello, world', order: 12345 },
    { id: '2', text: 'Foobar', order: 11 },
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
