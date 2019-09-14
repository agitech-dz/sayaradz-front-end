import React  from 'react';
import './App.css';
import { Admin, Resource} from 'react-admin';


// Files csv

import {filestock} from './Fichiers CSV/file stock.js';
import {filetarifs} from './Fichiers CSV/file tarifs.js';


// Components
import RestProvider from './RestProvider';
import AuthProvider from './AuthProvider';
import Dashboard from './Dashboard';
import { TarifsList, TarifsEdit } from './tarifs.js';
import { ModelList, ModelEdit, ModelCreate } from './Gerer Modeles/Model.js';
import { VersionList, VersionEdit, VersionCreate } from './Gerer versions/Version.js';
import { OptionsList, OptionsEdit, OptionsCreate } from './Gerer Options/Options.js';
import { ColorsList, ColorsEdit, ColorsCreate } from './Gerer coleurs/Colors.js';
import { NewcarsList , NewcarsCreate, NewcarsEdit} from './newcars.js';
import { CommandList,CommandEdit } from './Commande/Command.js';
// Icons
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import ColorsIcon from '@material-ui/icons/Palette';
import FileIcon from '@material-ui/icons/PublishRounded';
import OptionsIcon from '@material-ui/icons/List';
import StockIcon from '@material-ui/icons/LocalCarWash';
import CommandIcon from '@material-ui/icons/Description';
import tarifIcon from '@material-ui/icons/MonetizationOn';
import indigo from '@material-ui/core/colors/indigo';
import { i18nProvider} from './myTheme.js'





import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: indigo,
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (

  
    <Admin  locale="fr" i18nProvider={i18nProvider} theme={theme}   dashboard={Dashboard} authProvider={AuthProvider} dataProvider={RestProvider}>
     
      <Resource  name="models" options={{ label: 'Modèles' }} list={ModelList} edit={ModelEdit} create={ModelCreate} icon={ManufacturerIcon} />
     <Resource  name="versions" options={{ label: 'Versions' }} list={VersionList} edit={VersionEdit} create={VersionCreate} icon={ManufacturerIcon} />  
     <Resource  name="options" options={{ label: 'Options' }} list={OptionsList} edit={OptionsEdit} create={OptionsCreate} icon={OptionsIcon} />
     <Resource  name="colors" options={{ label: 'Coleurs' }} list={ColorsList} edit={ColorsEdit} create={ColorsCreate} icon={ColorsIcon} /> 
     
     
     <Resource  name ="stock" options={{ label: 'fichier stock' }} list={filestock} icon={FileIcon}  /> 
     <Resource  name="post-newcars-stock" options={{ label: 'Voitures en stock' }} list={NewcarsList} edit={NewcarsEdit} create= {NewcarsCreate} icon={StockIcon} />       
     <Resource name="tarifs"  options={{ label: 'fichier tarifs' }} list={filetarifs} icon={FileIcon} /> 
     <Resource  name ="tarifs-versions" options={{ label: 'tarifs des versions ' }} list={TarifsList} edit={TarifsEdit} icon={tarifIcon} /> 
     <Resource  name ="tarifs-options" options={{ label: 'tarifs des options ' }} list={TarifsList} edit={TarifsEdit} icon={tarifIcon}  /> 
     <Resource  name ="tarifs-colors" options={{ label: 'tarifs des couleurs ' }} list={TarifsList} edit={TarifsEdit}   icon={tarifIcon}/> 
     <Resource name="commands"  options={{ label: 'Commands entrées' }} list={CommandList}  edit={CommandEdit} icon={CommandIcon} /> 

    
    </Admin>
);

  

export default App;

