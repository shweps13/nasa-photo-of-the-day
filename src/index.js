import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// useEffect(() => {
//     axios
//       .get(`https://api.nasa.gov/planetary/apod?api_key=3ZziD2DucHvduPC0uV2H0qfmSZebMO8gdBXYfVVy`, {
//         params: {}
//       })
//       .then(response => {
//         const nasaData = response.data;
//         console.log("Nasa data is here", nasaData);
//         setNasaobj(nasaData);
//       })
//       .catch(function (error) {
//           console.log("Oh-oh, something wrong", error);
//       });
//   }, []);


//   // let index = 0;
//   // let currentObjMain = nasaobj[index];
//   // console.log("Here is the element", currentObjMain)
  
//     return (
//       <div className="container">
//             <Nasaslide
//               key={nasaobj.service_version}
//               identifier={nasaobj.identifier}
//               date={nasaobj.date}
//               explanation={nasaobj.explanation}
//               hdurl={nasaobj.hdurl}
//             />


//       </div>
//     );
// }

