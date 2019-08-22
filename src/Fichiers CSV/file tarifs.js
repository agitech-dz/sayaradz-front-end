import React from 'react';
import CSVReader from "react-csv-reader";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Title } from 'react-admin';
import Card from '@material-ui/core/Card';
const handleForce = data => {
 
  let resStatus = 0

   var tarifsList = [];
  
           for (var i = 0; i < data.length; i++) {
            
             const type = data[i][1];
             const code = data[i][2];
             const dateBegin = data[i][3];
             const dateEnd =  data[i][4];
             const price = data[i][5];
             const tarif = {"type":type, "code":code , "dateBegin": dateBegin, "dateEnd": dateEnd , "price": price};
         
            tarifsList.push(tarif);
           
           
             
           };
           console.log(tarifsList);

           fetch('https://sayaradz-back-end.herokuapp.com/api/post-tarifs', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              authorization: 'Token '+localStorage.getItem('token'),
            },

            body: JSON.stringify(tarifsList)
          })
          .then(res => {
            resStatus = res.status
            return res.json()
          })
          .then(res => {
            switch (resStatus) {
              case 201:
            {
              NotificationManager.success('Fichier uploadé avec succès', 'Fichier uploadé');
              NotificationManager.info('Les tarifs sont ajoutés dans les sections versions, options et couleurs');
             
               
                break}
              case 400:
                if (res.code === 'ValidationFailed') {
                  // My custom error messages from the API.
                  console.log(res.fieldMessages)
                  NotificationManager.error('Validation échouée', 'Erreur!');
                } else {
                  NotificationManager.error('Invalide requete verifier les données entrées', 'Erreur!');
                  NotificationManager.warning('Verifier le type n a pas déjà un tarif ' );
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


export const filetarifs = () => (
 
<Card >
  <div align="center" oncontextmenu="return false">
  
<Title title="Upload fichier tarifs" />
        <br /><br /><br />
       
        <CSVReader
cssClass="react-csv-input" 
onFileLoaded={handleForce}
/><NotificationContainer/>
          <br /><br /><br />
        
        <h2>Télecharger votre fichier <font size={5} color="#00A4FF">CSV tarifs</font><br /> içi.</h2>
      </div>

      </Card>
);

