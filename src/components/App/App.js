import React from 'react';
import './App.css';
import { Admin, Resource, Login } from 'react-admin';
import frenchMessages from 'ra-language-french';

// Components
import AuthProvider from '../../utils/AuthProvider';
import RestProvider from '../../utils/RestProvider';
import Dashboard from '../Dashboard/Dashboard';
import { AdminList, AdminEdit, AdminCreate } from '../Admins/Admins';
import { ManufacturerList, ManufacturerEdit, ManufacturerCreate } from '../Manufacturers/Manufacturers';
import { UserList, UserEdit, UserCreate } from '../Users/Users';

// Icons
import AdminIcon from '@material-ui/icons/Person';
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';

// Constants
const MyLoginPage = () => <Login backgroundImage="../LoginPage/background.jpg" />;
const messages = {
    'fr': frenchMessages,
};
const i18nProvider = locale => messages[locale];

/**
 * Admin page
 *
 * @returns { Admin } the admin page
 * @constructor
 */
const App = () => (
    <Admin locale="fr" i18nProvider={i18nProvider} loginPage={MyLoginPage} dashboard={Dashboard} authProvider={AuthProvider} dataProvider={RestProvider}>
        <Resource name="admins" options={{ label: 'Administrateurs' }} list={AdminList} edit={AdminEdit} create={AdminCreate} icon={AdminIcon} />
        <Resource name="manufacturers" options={{ label: 'Fabricants' }} list={ManufacturerList} edit={ManufacturerEdit} create={ManufacturerCreate} icon={ManufacturerIcon} />
        <Resource name="manufacturers-users" options={{ label: 'Utilisateurs fabricants' }} list={UserList} icon={UserIcon} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default App;
