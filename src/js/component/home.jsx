import React, {useState} from "react";
import { v4 as uuidv4} from 'uuid';
import { Todo } from "./Todo"
uuidv4();
//include images into your bundle

import TaskDisplay from './TaskDisplay'
//create your first component


const Home = () => {
	const[ todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, {id: uuidv4(), task: todo,
		completed: false, isEditing: false}]);
		

	}
	return (
		<div className="taskWrapper">
			<TaskDisplay addTodo={addTodo} />
			{todos.map((todo, index) => (
				<Todo task={todo} key={index} />
			))};
		</div>
	);
};

export default Home;
