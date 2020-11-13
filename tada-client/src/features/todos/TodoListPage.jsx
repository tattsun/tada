import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos } from './todosSlice';
import classes from './TodoListPage.module.css';
import TodoInputForm from './TodoInputForm';

const TodoListPage = () => {
  const todos = useSelector(selectAllTodos);

  const orderedTodos = todos.slice().sort((a, b) => a.order - b.order);

  const todoItems = orderedTodos.map((todo) => (
    <div className={classes.TodoItem} key={todo.id}>
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
