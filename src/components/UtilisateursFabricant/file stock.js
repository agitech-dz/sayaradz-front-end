import React from 'react';
import CSVReader from "react-csv-reader";
import axios from 'axios';

const handleForce = data => {
   var myObjStr = JSON.stringify(data);
   
    console.log(JSON.parse(myObjStr));
   /* const Donnee = {
      name: myObjStr
      http://localhost:4000/Donnee/add
      
    }*/
  axios.post('https://53f409a2.ngrok.io/api/file_stock', myObjStr)
  .then(res => console.log(res.data));
  
};


export const filestock = () => (
  <div className="container">
  <br/>
  <br/>
    <CSVReader
      cssClass="react-csv-input"
      label="Selectionner le fichier stock "
      onFileLoaded={handleForce}
    />

  </div>
);

