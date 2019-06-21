import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { Create } from 'react-admin';

/**
 * Admins list
 *
 * @returns { List } the list of admins
 */

export const AdminList = props => (
    <List title='Liste des administrateurs' {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `${record.username} ${record.first_name}`}
                    secondaryText={record => `${record.last_name}`}
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                    <TextField source="is_superuser" />
                </Datagrid>
            }
        />
    </List>
);

/**
 * Admins edit form
 *
 * @returns { Edit } the edit form of an admin
 */
export const AdminEdit = props => (
    <Edit title='Modifier un administrateur' {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="email" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <BooleanInput source="is_superuser" />
        </SimpleForm>
    </Edit>
);

/**
 * Admins create form
 *
 * @returns { Create } the create form of a manufacturer
 */
export const AdminCreate = props => (
    <Create title='Créer un administrateur' {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="email" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <BooleanInput source="is_superuser" />
        </SimpleForm>
    </Create>
);
