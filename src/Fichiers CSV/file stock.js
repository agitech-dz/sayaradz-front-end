import React from 'react';
import CSVReader from "react-csv-reader";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
/*import FileUploadProgress  from 'react-fileupload-progress';*/
import { Title } from 'react-admin';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@material-ui/core/Card';

export const handleForce = data   => {
   
  

   var stockList = [];
   let resStatus = 0
           for (var i = 0; i < data.length; i++) {
            
             const numChassis = data[i][1];
             const colors = data[i][2];
             const version = data[i][3];
             const options =data[i][4];
             const seller = data[i][5];
            
             const stock = {  "numChassis" :numChassis,"color":colors , "version": version, "options": options , "seller": seller};
            stockList.push(stock);
           
        
        
           };
           console.log(stockList);
           fetch('https://sayaradz-back-end.herokuapp.com/api/post-newcars-stock', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              authorization: 'Token '+localStorage.getItem('token'),
            },

            body: JSON.stringify(stockList)
          })
          .then(res => {
            resStatus = res.status
            if(res.ok){
            return res.json()}
          })
           .then(res => {
            switch (resStatus) {
              case 201:
            {
              NotificationManager.success('Fichier uploadé avec succès', 'Fichier uploadé');
              NotificationManager.info('Pour consulter le stock aller vers la section voitures en stock');
             
               
                break}
              case 400:
                if (res.code === 'ValidationFailed') {
                  // My custom error messages from the API.
                  console.log(res.fieldMessages)
                  NotificationManager.error('Validation échouée', 'Erreur!');
                } else {
                  NotificationManager.error('Invalide requete verifier les données entrées', 'Erreur!');
                  NotificationManager.warning('Verifier que les données rentrées n existe pas déjà' );
                  console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
                }
                break
              case 500:
              NotificationManager.error('Erreur de serveur, réessayez', 'Erreur!');
              
             
              
                break
              default:
                console.log('unhandled')
                break
            }
          })
          .catch(err => {
            console.error(err)
          })
        
  
};


export const filestock = () => (

  <Card >

  <div align="center" oncontextmenu="return false">
 
<Title title="Upload fichier stock" />
        <br /><br /><br />
       
        <CSVReader
cssClass="react-csv-input" 
onFileLoaded={handleForce}


       

/>

          <br /><br /><br />
          <NotificationContainer/>
        <h2>Télecharger votre fichier <font size={5} color="#00A4FF">CSV stock</font><br /> içi.</h2>
            
      </div>
      </Card > 

);

