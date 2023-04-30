import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './project.css';
import Sidebar from "../sidebar/Sidebar";
import ProjectDetails from '../Projectdets/projectdets';




function ShowProjects () {
	// State to store added projects
	const [projects, setProjects] = useState(undefined);
	const [projectData, setProjectData] = useState(null);

	const navigate = useNavigate(); 


	function showProjects () {
		fetch('/projects')
			.then((res) => res.json())
			.then((projects) => setProjects(projects))
			.catch((err) => alert('unable to get projects.'));
	}

	// function viewProject (id) {
	// 	fetch(`http://localhost/3000/projects/${id}`)
	// 		.then((res) => res.json())
	// 		.then((projectData) => projectData)
	// }

	function viewProject(id) {
		fetch(`/projects/${id}`)
		  .then((res) => res.json())
		  .then((projectData) => {

			console.log(projectData)
			setProjectData(projectData);
			navigate("/project-dets", { state: { projectData } });

		  });


		}

	useEffect(() => {
		showProjects();
		return;
	}, []);

	return <section className="projects-containr">

		{ projects && projects.length > 0 ? projects.map((project, index) => {
			return <div className="project" key={ index }>
				<section className="image-container">
				</section>
				<section className="project-actions">
					<div class="card-body">
    <h5 class="card-title">{project.name}</h5>
	<img alt="Image" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="avatar avatar-lg rounded-circle" data-title="Peggy Brown" data-toggle="tooltip" />
	<img alt="Image" src="https://media.licdn.com/dms/image/C4E03AQFn8-FJxE-O6Q/profile-displayphoto-shrink_400_400/0/1649963399162?e=1688601600&v=beta&t=jQ2QietUvIXkKxEfhFl4DVuVEl7WEt-Jr8V-QKbzYus" class="avatar avatar-lg rounded-circle" data-title="Peggy Brown" data-toggle="tooltip" />
	<img alt="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2zpdkcmaH-9kmfHQYEQkd7KmgJpAwTOXBA&usqp=CAU" class="avatar avatar-lg rounded-circle" data-title="Peggy Brown" data-toggle="tooltip" />
    <p class="card-text">{project.description}</p>
    <a href="#" class="btn btn-primary" onClick={() => viewProject(project.id)} >View Details</a>
	
	
</div>


				</section>
			</div>
		}) : <h1>No projects found.</h1> }
	</section>
}

const Project = ({projectData}) => {
	// Get the navigate function from useNavigate
	const navigate = useNavigate();

	// Function to handle "Add Project" button click
	const handleAddProject = () => {
		
		navigate("/add-project");
	};

	return (
		<>
		<Sidebar />

		<div className="project-container">
			<section className="project-container-header">
				<h2>All Projects</h2>
				<button onClick={ handleAddProject } className="add-project-button primary">
					Add Project
				</button>
			</section>
			
          <ShowProjects />
        
		</div>
		</>
	);
};


export default Project