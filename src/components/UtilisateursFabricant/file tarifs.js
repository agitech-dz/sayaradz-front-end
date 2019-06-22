import React from 'react';
import CSVReader from "react-csv-reader";
import axios from 'axios';

const handleForce = data => {
   var myObjStr = JSON.stringify(data);
   
    console.log(JSON.parse(myObjStr));
  
  axios.post('https://53f409a2.ngrok.io/api/tarifs', myObjStr)
  .then(res => console.log(res.data));
  
};


export const filetarifs = () => (
  <div className="container">
  <br/>
  <br/>
    <CSVReader
      cssClass="react-csv-input"
      label="Selectionner le fichier des tarifs  "
      onFileLoaded={handleForce}
    />

  </div>
);

