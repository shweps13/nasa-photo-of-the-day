import React, { useState, useEffect } from "react";
import axios from "axios";
import Nasaslide from "./Nasaslide";

export default function Nasaapp() {
    const [nasaobj, setNasaobj] = useState([]);


    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=3ZziD2DucHvduPC0uV2H0qfmSZebMO8gdBXYfVVy`, {
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


    // let index = 0;
    // let currentObjMain = nasaobj[index];
    // console.log("Here is the element", currentObjMain)
    
    return (
      <div className="container">
        {nasaobj.map(data => {
          return (
            <Nasaslide
              key={data.identifier}
              identifier={data.identifier}
              date={data.date}
              caption={data.caption}
              image={data.image}
            />
          );
        })}

      </div>
    );
  }
  

// return (
//   <div className="container">
//       <Nasaslide
//     key={currentObjMain.identifier}
//     identifier={currentObjMain.identifier}
//     date={currentObjMain.date}
//     caption={currentObjMain.caption}
//     image={currentObjMain.image}
//   />
//   </div>
// );
// }