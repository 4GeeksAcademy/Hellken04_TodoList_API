import React, {useState, useEffect } from "react";
import Tarea from "./Tarea"

const Home = () => {

	const [tareas, setTareas] = useState([]);
	
	function getToDos(){
		fetch("https://playground.4geeks.com/todo/users/Hellken04")
		.then((response)=>{
			console.log(response);
			if(response.ok==false){
				throw new Error ('Error al consultar To Do');
			}
			return response.json();
		})
		.then((data)=>{
			console.log("data",data);
			setTareas(data.todos);
			console.log(tareas);
		})
		.catch((error)=>{
			alert(error)
		})
	}

	function deleteToDo(indice) {
		
		fetch("https://playground.4geeks.com/todo/todos/"+indice,{
			method:"DELETE"
		})
		.then((data)=>{
			console.log("data",data);
			getToDos();
			return data;
		})
		.catch(()=>{
			alert(error)
		})
	}
	
	function createToDo (toDo){
		let bodyData = {label: toDo, is_done: false};
		console.log (bodyData);
		fetch("https://playground.4geeks.com/todo/todos/Hellken04",{
			method:"POST",
			body: JSON.stringify(bodyData),
			headers:{
				'Content-Type':'application/json'
			}
		})
			.then((response)=>{
				return response.json();
			})
			.then((data)=>{
				console.log(data);
				getToDos();
			})
			.catch(()=>{
				alert(error)
			})
	}

	useEffect(()=>{
		getToDos();
	},[])

	return (
		<div className="container bg-light">
			<div>
				<h1>My ToDo List</h1>
			</div>
			<div>
				<input className="form-control mb-2 mx-1" id="nuevaTarea" placeholder="Ingresa una Nueva tarea" style={{ width: "400px" }} onKeyUp={(event) => {
					if (event.key === 'Enter') {
						createToDo(event.target.value);
					}
				}}></input>
			</div>
			<>
				{tareas.map((tarea, index, array) => {
					return (
						<Tarea tarea={tarea.label} deleteToDo={deleteToDo} key={index} index={tarea.id}/>
						)
					}
				)
				}
			</>
			<div className="">
				<div className="alert alert-light my-0 mx-1" style={{ width: "400px", height:"40px" }} >
					<div className="col-12">
						<p className="pb-2">{tareas.length}  Items left</p>
					</div>
				</div>
				<div className="my-0 ms-3 border border-top-0 rounded-bottom" style={{ width: "370px", height:"8px" }} ></div>
				<div className="mt-0 ms-4 border border-top-0 rounded-bottom" style={{ width: "360px", height:"8px" }} ></div>
			</div>

		</div>
	);
};

export default Home;