import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])
	return (
		<div className="container">
			<h1>Todo List</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue} 
						onKeyDown={(e) => {
								if(e.key === "Enter") {
									setTodos(todos.concat(inputValue));
									setInputValue("");
								}
							}}
						placeholder="Agrega una Tarea...">
					</input>
				</li>
				{todos.map((t, i) => (
					<li className="d-flex justify-content-between">
						<span><i class="fa-solid fa-chevron-right"></i> {t}</span><span className="hide"><i class="fa-solid fa-x float-right exe" onClick={() => setTodos(todos.filter((t, currentI) => i != currentI))} ></i></span>
					</li>
				))}
			</ul>
			<div className={"noTask"+ (todos.length === 0 ? "" : " hide")}>No hay Tareas, agrega una.</div>
			<div className="total">{todos.length} Tareas</div>
		</div>
	);
};

export default Home;