import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';

// Components
import AuthProvider from './AuthProvider';
import RestProvider from './RestProvider';
import Dashboard from './Dashboard';
//import { AdminList } from './Admins';
import { ManufacturerList, ManufacturerEdit, ManufacturerCreate } from './Manufacturers';
import { UserList } from './Users';
// <Resource name="admins" options={{ label: 'Administrateurs' }} list={AdminList} icon={AdminIcon} />

// Icons
//import AdminIcon from '@material-ui/icons/Person';
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={RestProvider}>
        <Resource name="manufacturers" options={{ label: 'Fabricants' }} list={ManufacturerList} edit={ManufacturerEdit} create={ManufacturerCreate} icon={ManufacturerIcon} />
        <Resource name="manufacturersUsers" options={{ label: 'Utilisateurs' }} list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
