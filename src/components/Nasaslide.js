import React from "react";

const Nasaslide = props => {
  return (
   
    <div className="slide" key={props.service_version}>
      <h2> Date of picture: {props.date}</h2>
      <img className="nasaimg" alt="Our planet" src={props.hdurl} />
      <p>{props.explanation}</p>
    </div>
  );
};

export default Nasaslide;