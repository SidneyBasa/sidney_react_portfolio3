import React from 'react'
import Project from '../Project'
import '../../styles/Profile.css'
import techblog from '../../images/techblog.jpg'
import notetaker from '../../images/noteTaker.jpg'
import ecom from '../../images/eCommerceServer.jpg'
import SQLinquirer from '../../images/SQLInquirer.jpg'
import passgen from '../../images/passgen.jpg'
import marketing from '../../images/marketing.jpg'

const project1= {
  name: 'Techblog Project',
  description: 'Model View Controller website',
  image: techblog,
  visit: 'https://github.com/SidneyBasa/challenge-14-tech-blog',
  id: 1,
};

const project2= {
  name: 'Note Taking App Project',
  description: 'Saving notes to a JSON file and display website',
  image: notetaker,
  visit: 'https://github.com/SidneyBasa/Challenge_11_Note_Taking_Application',
  id: 2,
};


const project3= {
  name: 'Ecommerce Backend Server Project',
  description: 'Express Server',
  image: ecom,
  visit: 'https://github.com/SidneyBasa/Challenge_13ecommerce_server',
  id: 3,
};

const project4= {
  name: 'SQL database',
  description: 'A database using inquirer',
  image: SQLinquirer,
  visit: 'https://github.com/SidneyBasa/sql_employee_registry',
  id: 4,
};

const project5= {
  name: 'password generator',
  description: 'A website that generates a new password',
  image: passgen,
  visit: 'https://github.com/SidneyBasa/password_generator3000',
  id: 5,
};

const project6= {
  name: 'marketing website',
  description: 'A website created with html css and JavaScript',
  image: marketing,
  visit: 'https://github.com/SidneyBasa/web-marketing-office2',
  id: 6,
};


export default function Profile() {
  return (
    <div>Profile
    <div className='projectDiv'>
    <Project name={project1.name} description={project1.description} id={project1.id} image={project1.image} visit={project1.visit}/>
    <Project name={project2.name} description={project2.description} id={project2.id} image={project2.image} visit={project2.visit}/>

    </div>
    <div className='projectDiv'>
    <Project name={project3.name} description={project3.description} id={project3.id} image={project3.image} visit={project3.visit}/>
    <Project name={project4.name} description={project4.description} id={project4.id} image={project4.image} visit={project4.visit}/>
      
    </div>
    <div className='projectDiv'>
    <Project name={project5.name} description={project5.description} id={project5.id} image={project5.image} visit={project5.visit}/>
    <Project name={project6.name} description={project6.description} id={project6.id} image={project6.image} visit={project6.visit}/>
      
    </div>
    
    </div>
  )
}
