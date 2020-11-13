import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import authReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});
