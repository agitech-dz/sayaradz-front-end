import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest";

// Components
import AuthProvider from './AuthProvider';
import Dashboard from './Dashboard';
//import { AdminList } from './Admins';
import { ManufacturerList, ManufacturerEdit, ManufacturerCreate } from './Manufacturers';
import { UserList } from './Users';
// <Resource name="admins" options={{ label: 'Administrateurs' }} list={AdminList} icon={AdminIcon} />

// Icons
//import AdminIcon from '@material-ui/icons/Person';
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';

// constants
const dataProvider = simpleRestProvider('http://localhost:3001');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
        <Resource name="manufacturers" options={{ label: 'Fabricants' }} list={ManufacturerList} edit={ManufacturerEdit} create={ManufacturerCreate} icon={ManufacturerIcon} />
        <Resource name="users" options={{ label: 'Utilisateurs' }} list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
