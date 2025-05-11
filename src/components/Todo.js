import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, togglecomplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p
        onClick={() => togglecomplete(task.id)}
        className={task.completed ? 'completed' : ''}
        style={{ cursor: 'pointer' }}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          style={{ cursor: 'pointer', marginRight: '10px' }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};
