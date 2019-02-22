import React, { Component } from 'react';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from './UserList';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/iahmedbacha/sayaradz');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
