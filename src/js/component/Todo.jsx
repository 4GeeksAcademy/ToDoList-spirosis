import React from 'react';


export const Todo = ({ task, deleteTodo }) => {
  return (
    <div className="Todo">
      <li className="list-group-item d-flex 
      justify-content-between 
      align-items-center
      border-bottom">
        <p className="mr-auto ">{task.task}</p>
        <div className="ml-auto">
          <button className="btn-delete" onClick={() => deleteTodo(task.id)}>
            X
          </button>
        </div>
      </li>
    </div>
  );
};
