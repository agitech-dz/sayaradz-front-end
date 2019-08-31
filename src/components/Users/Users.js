import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField, EditButton, BooleanInput, NumberInput } from 'react-admin';
import { Edit, SimpleForm, TextInput, BooleanField } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

/**
 * Manufacturers users list
 *
 * @returns { List } the list of manufacturers users
 */
export const UserList = props => (
    <List title='Liste des utilisateurs fabricants' {...props}>
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
                    <TextField label="Fabricants" source="manufacturer_name" />
                    <EmailField label="Mail" source="email" />
                    <BooleanField label="Etat" source="is_blocked" />
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

/**
 * Manufacturer user edit form
 *
 * @returns { Edit } the edit form of a Manufacturer user
 */
export const UserEdit = props => (
    <Edit title='Modifier un utilisateur fabricant' {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="password" />
            <TextInput source="address" />
            <NumberInput source="telephone" />
            <TextInput source="email" />
            <BooleanInput source="is_blocked" />
            <TextInput source="manufacturer" />
        </SimpleForm>
    </Edit>
);

/**
 * Manufacturer user create form
 *
 * @returns { Create } the create form of a Manufacturer user
 */
export const UserCreate = props => (
    <Create title='Créer un utilisateur fabricant' {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="password" />
            <TextInput source="address" />
            <NumberInput source="telephone" />
            <TextInput source="email" />
            <BooleanInput source="is_blocked" />
            <TextInput source="manufacturer" />
        </SimpleForm>
    </Create>
);
