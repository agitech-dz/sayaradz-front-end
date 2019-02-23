import React from 'react';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';

// Components
import AuthProvider from './AuthProvider';
import Dashboard from './Dashboard';
import { AdminList } from './Admins';
import { ManufacturerList, ManufacturerEdit, ManufacturerCreate } from './Manufacturers';
import { UserList } from './Users';

// Icons
import AdminIcon from '@material-ui/icons/Person';
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';

// constants
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/iahmedbacha/sayaradz');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
        <Resource name="admins" options={{ label: 'Administrateurs' }} list={AdminList} icon={AdminIcon} />
        <Resource name="manufacturers" options={{ label: 'Fabricants' }} list={ManufacturerList} edit={ManufacturerEdit} create={ManufacturerCreate} icon={ManufacturerIcon} />
        <Resource name="users" options={{ label: 'Utilisateurs' }} list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
