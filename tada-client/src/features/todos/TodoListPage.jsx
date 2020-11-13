import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTodos, todoSetDoneStatus } from './todosSlice';
import classes from './todos.module.css';
import TodoInputForm from './TodoInputForm';

const TodoListPage = () => {
  const todos = useSelector(selectAllTodos);

  const dispatch = useDispatch();

  const orderedTodos = todos.slice().sort((a, b) => b.order - a.order);

  const onDoneClicked = (todoId, done) => () => {
    dispatch(todoSetDoneStatus({ id: todoId, done }));
  };

  const todoItems = orderedTodos.map((todo) => (
    <div className={classes.TodoItem} key={todo.id}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={onDoneClicked(todo.id, !todo.done)}
      />
      <span className={todo.done ? classes.TodoTextDone : ''}>
        {todo.text}
        {' '}
        <span className={classes.TodoId}>
          (
          {todo.id}
          )
        </span>
      </span>
    </div>
  ));

  return (
    <>
      <TodoInputForm />
      <section>
        {todoItems}
      </section>
    </>
  );
};

export default TodoListPage;
