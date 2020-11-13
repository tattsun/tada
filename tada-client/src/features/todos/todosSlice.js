import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: nanoid(), text: 'Hello, world', order: 12345 },
    { id: nanoid(), text: 'Foobar', order: 11 },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const maxOrder = state.todos.reduce((acc, cur) => {
        if (cur.order > acc) {
          return cur.order;
        }
        return acc;
      }, 100000);

      const { text } = action.payload;
      const todo = {
        id: nanoid(),
        text,
        order: maxOrder + 1000,
      };

      state.todos.push(todo);
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.todos;
