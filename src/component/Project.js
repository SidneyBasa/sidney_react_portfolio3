import React from 'react'


export default function Project(props) {

    const cardStyle = {
        width: '35rem',
      };

  return (
    <div className="container">
    <div className="card" style={cardStyle}>
      <img
        className="card-img-top"
        src={props.image}
        alt="Project made by sidney"
      />
      <div className="card-body">
      <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Description: {props.description}</p>
        <p className="card-text">ID: {props.id}</p>
        <a href={props.visit} className="btn btn-primary">
          View {props.name}
        </a>
      </div>
    </div>
  </div>
  )
}
