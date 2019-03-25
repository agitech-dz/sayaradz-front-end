import React from 'react';
import CSVReader from "react-csv-reader";
import axios from 'axios';

const handleForce = data => {
   var myObjStr = JSON.stringify(data);
   
    console.log(JSON.parse(myObjStr));
   /* const Donnee = {
      name: myObjStr
      
    }*/
  axios.post('http://localhost:4000/Donnee/add', myObjStr)
  .then(res => console.log(res.data));
  
};


export const filestock = () => (
  <div className="container">
  <br/>
  <br/>
    <CSVReader
      cssClass="react-csv-input"
      label="Select CSV file "
      onFileLoaded={handleForce}
    />

  </div>
);

