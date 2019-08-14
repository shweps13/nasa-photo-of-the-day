import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nasaapp() {
    const [nasaobj, setNasaobj] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY`, {
          params: {}
        })
        .then(response => {
          const nasaData = response.data;
          console.log("Nasa data is here", nasaData);
          setNasaobj(nasaData);
        })
        .catch(function (error) {
            console.log("Oh-oh, something wrong", error);
        });
    }, []);
    return (
      <div className="container">
           </div>
    );
  }
  