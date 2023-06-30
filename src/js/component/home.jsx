import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])
	function getTodos(){
		fetch('https://assets.breatheco.de/apis/fake/todos/user/ParraJuanPablo', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(resp => {
			//console.log(resp.ok); // will be true if the response is successfull
			//console.log(resp.status); // the status code = 200 or code = 400 etc.
			//console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
			setTodos(JSON.stringify(data))
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	};
	function addPutTodos(a){
		
		let newTodos = 			[
			...todos,{
			"label": a,
			"done": false
		  }]
		
		fetch('https://assets.breatheco.de/apis/fake/todos/user/ParraJuanPablo', {
		  method: "PUT",
		  body: JSON.stringify(newTodos),
		  headers: {
			"Content-Type": "application/json"
		  }
		})
		.then(resp => {
			//console.log(resp.ok); // will be true if the response is successfull
			//console.log(resp.status); // the status code = 200 or code = 400 etc.
			//console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			getTodos(); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
		
	};
	function deletePutTodos(t, i){

		setTodos(todos.filter((t, currentI) => i != currentI))

		fetch('https://assets.breatheco.de/apis/fake/todos/user/ParraJuanPablo', {
		  method: "PUT",
		  body: JSON.stringify(todos),
		  headers: {
			"Content-Type": "application/json"
		  }
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	};
	function emptyPutTodos(){

		setTodos([])

		fetch('https://assets.breatheco.de/apis/fake/todos/user/ParraJuanPablo', {
		  method: "PUT",
		  body: JSON.stringify(todos),
		  headers: {
			"Content-Type": "application/json"
		  }
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	};
	useEffect(() =>{
		// here I fetch my todos from the API
		getTodos()}
	, []);
	console.log(todos)
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
									addPutTodos(inputValue);
									setInputValue("");
								}
							}}
						placeholder="Agrega una Tarea...">
					</input>
				</li>
				<ul>
					{/* {todos.map(t => {
						return(
							<li className="d-flex justify-content-between">
								<span>
									<i className="fa-solid fa-chevron-right"></i> {t.label}
								</span>
								<span className="hide">
									<i className="fa-solid fa-x float-right exe" onClick={() => deletePutTodos(t, i)} ></i>
								</span>
							</li>)}
						)
					} */}
				</ul>
			</ul>
			<div className={"noTask"+ (todos.length === 0 ? "" : " hide")}>No hay Tareas, agrega una.</div>
			<div className="end">
				<div className="total">{todos.length} Tareas</div>
				<div className="trash" onClick={() => emptyPutTodos()}><i className="fa-solid fa-trash-can"></i></div>
			</div>
		</div>
	);
};

export default Home;