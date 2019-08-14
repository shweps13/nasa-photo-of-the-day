import React from "react";

const Nasaslide = props => {
  return (
   
    <div className="slide" key={props.identifier}>
      <h2> Date of picture: {props.date}</h2>
      <img className="nasaimg" alt="Our planet" src={`https://epic.gsfc.nasa.gov/archive/natural/2019/06/27/jpg/${props.image}.jpg`} />
      <p>{props.caption}</p>
    </div>
  );
};

export default Nasaslide;