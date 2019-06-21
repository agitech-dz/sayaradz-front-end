import React  from 'react';
import './App.css';
import { Admin, Resource} from 'react-admin';
import {filestock} from './file stock';
import {filetarifs} from './file tarifs';

// Components


import RestProvider from './RestProvider';
import Dashboard from './Dashboard';
import { ModelList, ModelEdit, ModelCreate } from './Model.js';
import { VersionList, VersionEdit, VersionCreate } from './Version.js';
import { OptionsList, OptionsEdit, OptionsCreate } from './Options.js';
import { ColorsList, ColorsEdit, ColorsCreate } from './Colors.js';
import { NewcarsList, NewcarsEdit, NewcarsCreate } from './newcars.js';
import { TarifsList, TarifsEdit, TarifsCreate } from './tarifs.js';
// Icons

import ManufacturerIcon from '@material-ui/icons/DirectionsCar';




const App = () => (

  
    <Admin  dashboard={Dashboard}  dataProvider={RestProvider}>
     <Resource  name="model" options={{ label: 'Modèles' }} list={ModelList} edit={ModelEdit} create={ModelCreate} icon={ManufacturerIcon} />
     <Resource  name="version" options={{ label: 'Versions' }} list={VersionList} edit={VersionEdit} create={VersionCreate} icon={ManufacturerIcon} />  
     <Resource  name="options" options={{ label: 'Options' }} list={OptionsList} edit={OptionsEdit} create={OptionsCreate} icon={ManufacturerIcon} />
     <Resource  name="colors" options={{ label: 'Coleurs' }} list={ColorsList} edit={ColorsEdit} create={ColorsCreate} icon={ManufacturerIcon} /> 
     <Resource  name="cars" options={{ label: 'Voitures' }} list={NewcarsList} edit={NewcarsEdit} create={NewcarsCreate} icon={ManufacturerIcon} />       
     <Resource  name="stock" options={{ label: 'fichier stock' }} list={filestock}  /> 
     <Resource  name="filetarifs" options={{ label: 'fichier tarifs' }} list={filetarifs}  /> 
     <Resource  name="tarifs" options={{ label: 'Tarifs' }} list={TarifsList} edit={TarifsEdit} create={TarifsCreate} icon={ManufacturerIcon} />         
    </Admin>
);

   
  

export default App;
