import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos } from './todosSlice';
import classes from './TodoListPage.module.css';
import TodoInputForm from './TodoInputForm';

const TodoListPage = () => {
  const todos = useSelector(selectAllTodos);

  const todoItems = todos.map((todo) => (
    <div className={classes.TodoItem}>
      {todo.id}
      :
      {todo.text}
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
