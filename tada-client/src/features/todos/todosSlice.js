import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: nanoid(), text: 'Hello, world', order: 12345, done: false,
    },
    {
      id: nanoid(), text: 'Foobar', order: 11, done: false,
    },
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
        done: false,
      };

      state.todos.push(todo);
    },
    todoSetDoneStatus(state, action) {
      const { id, done } = action.payload;

      state.todos.forEach((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.done = done;
        }
      });
    },
  },
});

export const { todoAdded, todoSetDoneStatus } = todosSlice.actions;

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.todos;
