import React, {useState} from 'react';
import { Todo } from './Todo'

function TaskDisplay({addTodo}) {
  const [ value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  }
    return ( 
      
    <form className="TaskForm" onSubmit={handleSubmit}>
       
      <div className="title text-center">
        <h1 className="display-1 text-muted">todos</h1>
      </div>
      <ul class="list-group container col-8">
      
  <input 
    className="todo-input text-left border-0 py-2" 
    type="text"
    value={value}
    placeholder="What is the task today?" 
    onChange = { e => setValue(e.target.value)} />
  
  

 
</ul>

</form>
    );
}

export default TaskDisplay;