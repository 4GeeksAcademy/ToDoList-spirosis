import React, {useState} from "react";
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo'
import Footer from './footer';
uuidv4();
//include images into your bundle

import TaskDisplay from './TaskDisplay'
//create your first component


const Home = () => {
	const [ todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, {id: uuidv4(), task: todo,
		completed: false, isEditing: false}]);
		

	}

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
	const remainingTasks = todos.filter((todo) => !todo.completed).length;
	return (
		
		<div className="taskWrapper">
			
			<TaskDisplay addTodo={addTodo} />
			{todos.map((todo) => (
			<Todo 
				task={todo} 
				key={todo.id}
				deleteTodo={deleteTodo}
				/>
			))}
			<Footer remainingTasks={remainingTasks} />
		</div>
	);
};

export default Home;
