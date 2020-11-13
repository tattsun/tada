import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTodos, todoDeleted, todoSetDoneStatus } from './todosSlice';
import classes from './todos.module.css';
import TodoInputForm from './TodoInputForm';

const TodoListPage = () => {
  const todos = useSelector(selectAllTodos);

  const dispatch = useDispatch();

  const orderedTodos = todos.slice().sort((a, b) => b.order - a.order);

  const onDoneClicked = (todoId, done) => () => {
    dispatch(todoSetDoneStatus({ id: todoId, done }));
  };

  const onDeleteClicked = (todoId) => (e) => {
    e.preventDefault();
    dispatch(todoDeleted({ id: todoId }));
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

      <button type="button" className={classes.LinkButton} onClick={onDeleteClicked(todo.id)}>Delete</button>
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
