import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="mail" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="adr" />
            <TextField source="tel" />
            <TextField source="nom_fab" />
            <TextField source="bloque" />
        </Datagrid>
    </List>
);
