import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../styles/Footer.css'

export default function Footer() {
  return (


    
    <footer className="main-footer">
      <hr/>
        <div className="container">
            <div>
            <ul className="nav nav-tabs">
        
                <li className="nav-item"><a className="nav-link" href="https://github.com/SidneyBasa">Github</a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/sidney-basa/">LinkedIn</a></li>
                <li className="nav-item"><a className="nav-link" href="https://github.com/SidneyBasa">Twitter</a></li>
            </ul>

                
                </div>
            </div>
    </footer>

  )
}
