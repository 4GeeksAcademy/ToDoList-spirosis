import React, {useState} from 'react';



function TaskDisplay({addTodo}) {
  const [ value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  }
    return ( 
    <form className="TaskForm text-center" onSubmit={handleSubmit}>
       
      <div className="title ">
        <h1 className="display-1 text-muted">todos</h1>
      </div>
      <ul class="list-group container col-8">
      
  <input 
    className="todo-input text-center border-0 py-2" 
    type="text"
    value={value}
    placeholder="What is the task today?" 
    onChange = { e => setValue(e.target.value)} />
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <div className="mr-auto">Do your bed MF!</div>
    <div className="ml-auto"><button className="btn">X</button></div>
    
</li>
<footer className="border-0 py-2" placeholder="What is the task today?">N items Left</footer>
 
</ul>

</form>
    );
}

export default TaskDisplay;