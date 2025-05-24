import React, { useState } from "react";
import Tarea from "./Tarea"

const Home = () => {

	const [tareas, setTareas] = useState([]);
	console.log(tareas);

	function deleteToDo(indice) {
		console.log(indice);
		let tareasTemporal = tareas.filter((task, i) => i !== indice);
		console.log("temporal", tareasTemporal);
		setTareas(tareasTemporal);
	}

	return (
		<div className="container bg-light">
			<div>
				<h1>My ToDo List</h1>
			</div>
			<div>
				<input className="form-control mb-2 mx-1" id="nuevaTarea" placeholder="Ingresa una Nueva tarea" style={{ width: "400px" }} onKeyUp={(event) => {
					if (event.key === 'Enter') {
						setTareas([...tareas, event.target.value]);
					}
				}}></input>
			</div>
			<>
				{tareas.map((tarea, index, array) => {
					return (
						<Tarea tarea={tarea} deleteToDo={deleteToDo} key={index} index={index}/>
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