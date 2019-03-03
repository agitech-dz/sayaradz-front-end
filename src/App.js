import React from 'react';
import './App.css';
import { Admin, Resource, Login } from 'react-admin';

// Components
import AuthProvider from './AuthProvider';
import RestProvider from './RestProvider';
import Dashboard from './Dashboard';
import { AdminList } from './Admins';
import { ManufacturerList, ManufacturerEdit, ManufacturerCreate } from './Manufacturers';
import { UserList } from './Users';

// Icons
import AdminIcon from '@material-ui/icons/Person';
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';

// Constants
const MyLoginPage = () => <Login backgroundImage="./background.jpg" />;

const App = () => (
    <Admin loginPage={MyLoginPage} dashboard={Dashboard} authProvider={AuthProvider} dataProvider={RestProvider}>
        <Resource name="admins" options={{ label: 'Administrateurs' }} list={AdminList} icon={AdminIcon} />
        <Resource name="manufacturers" options={{ label: 'Fabricants' }} list={ManufacturerList} edit={ManufacturerEdit} create={ManufacturerCreate} icon={ManufacturerIcon} />
        <Resource name="manufacturers-users" options={{ label: 'Utilisateurs fabricants' }} list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
