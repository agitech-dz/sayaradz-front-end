import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';

const UsersTitle = () => {
    return <span>Utilisateurs fabricants</span>;
};

export const UserList = props => (
    <List title={<UsersTitle />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `${record.username}`}
                    secondaryText={record => `${record.first_name} ${record.last_name}`}
                    tertiaryText={record => `${record.id}`}
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField label="Id" source="id" />
                    <TextField label="Nom d'utilisateur" source="username" />
                    <TextField label="Prénom" source="first_name" />
                    <TextField label="Nom" source="last_name" />
                    <TextField label="Adresse" source="address" />
                    <TextField label="Téléphone" source="telephone" />
                    <TextField label="Fabricants" source="manufacturer" />
                    <EmailField label="Mail" source="mail" />
                    <TextField label="Etat" source="is_active" />
                </Datagrid>
            }
        />
    </List>
);
