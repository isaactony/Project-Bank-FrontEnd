import './Header.css'
import Sidebar from '../sidebar/Sidebar'
import Course from '../course/Course'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';

function Header({currentUser}) {
  console.log(currentUser)

  
  return (
    <>
        <div className='header'>
                    <img src='https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png' alt='logo'/>
                    <h2 className='title__h'>Pay-Bank</h2>

                <div className='header-nav'>
                    <span className='option-one'> Home</span> 
                    <span className='option-one'>About us</span>
                    {Array.isArray(currentUser) ? (
  currentUser.map(user => (
    <span className='option-one'>Welcome {user.username}</span>
  ))
) : (
  <span className='option-one'>Not Logged In</span>
)}


                      
                </div>


            </div>

             <Sidebar/>
            <Course/>
            <Footer/> 
    </>
    
  )
}

export default Header