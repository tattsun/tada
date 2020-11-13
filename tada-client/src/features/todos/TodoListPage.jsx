import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos } from './todosSlice';
import classes from './todos.module.css';
import TodoInputForm from './TodoInputForm';

const TodoListPage = () => {
  const todos = useSelector(selectAllTodos);

  const orderedTodos = todos.slice().sort((a, b) => b.order - a.order);

  const todoItems = orderedTodos.map((todo) => (
    <div className={classes.TodoItem} key={todo.id}>
      {todo.text}
      {' '}
      <span className={classes.TodoId}>
        (
        {todo.id}
        )
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
