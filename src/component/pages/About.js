import React from 'react'

import sidney from '../../images/SidneyBasa.jpg'

const cardStyle = {
  width: '45rem',
};

export default function About() {
  return (
    <div className="container">
    <div className="card" style={cardStyle}>
      <img
        className="card-img-top"
        src={sidney}
        alt="Project made by sidney"
      />
      <div className="card-body">
      <h5 className="card-title">Name: Sidney Basa </h5>
        <p className="card-text">Description: Fullstack Software Engineer </p>
        <p className="card-text">ID: Sidney</p>
        <p> Hello my name is Sidney Basa. I am a student of the UW Coding Bootcamp winter 2023. I have studied software programming since 2021. Prior to the UW coding bootcamp I studied the computer science couse CS50x from EdX.org presented by HarvardX. </p>

        <p>  
        I was born and raised and live in Seattle, Washington. My family is from the Phillippines. My family has lived in Seattle since the 1920's. I have a background as a Security guard and as an automotive mechanic. My recent security posts were for Swedish Hospital and Kaiser Permanente hospital in Seattle between 2021 and 2022. Before this I was working as a mechanic for Greyhound buslines at the Seattle base and Starline Luxury Coaches at their Seattle base. One of my first security jobs was when I worked at the Facebook engineering office for a year and a half. I even meet Mark Zuckerberg and when visited Seattle in 2011. His office and the environment is very different from the automotive environment for which I originally skilled up for.
        </p>
        <p>
        I am studying software engineering because I want to earn a better income for myself and most importantly for my family. Also I think software is cool. </p>
        
      </div>
    </div>
  </div>
  )
}
