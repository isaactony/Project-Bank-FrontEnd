import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Landingpage from './components/landingpage/landingpage';
import Project from './components/Projects/project';
import Cohorts from './components/Cohorts/cohorts';
import Logout from './components/Logout/logout';
import Login from './components/Login/login';
import AddProject from './components/Addproject/addprojectform';
import CohortForm from './components/CohortForm/cohortForm';
import ProjectDetails from './components/Projectdets/projectdets';
import FullStack from './components/FullStack/fullstack';
import Android from './components/Android/android';
import CyberSecurity from './components/CyberSecurity/cybersecurity';
import DataScience from './components/DataScience/datascience';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
   
  
  useEffect(() => {
    fetch("/logged_in", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(response => {
      setCurrentUser(response)
    })
  }, [])
  console.log(currentUser);

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header currentUser={currentUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/cohortform" element={<CohortForm />} />

        <Route path="/add-project" element={<AddProject />} />
        <Route path="/cohortform" element={<CohortForm />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/android" element={<Android />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />




        <Route path="/project-dets" element={<ProjectDetails />} />


      </Routes>
    </BrowserRouter>
  );
}
export default App;