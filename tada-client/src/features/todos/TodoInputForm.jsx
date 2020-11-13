import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from './todosSlice';
import classes from './todos.module.css';

const TodoInputForm = () => {
  const [text, setText] = useState('');

  const canSave = text !== '';

  const dispatch = useDispatch();

  const onTextChanged = (e) => setText(e.target.value);

  const onAddClicked = () => {
    dispatch(todoAdded({ text }));
    setText('');
  };

  return (
    <div className={classes.InputForm}>
      <form>
        <input type="text" onChange={onTextChanged} value={text} />
      </form>
      <button type="button" onClick={onAddClicked} disabled={!canSave}>Add</button>
    </div>
  );
};

export default TodoInputForm;
