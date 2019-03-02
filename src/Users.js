import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
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
                    <TextField source="id" />
                    <TextField source="username" />
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                    <TextField source="address" />
                    <TextField source="telephone" />
                    <TextField source="manufacturer" />
                    <EmailField source="mail" />
                    <TextField source="is_active" />
                </Datagrid>
            }
        />
    </List>
);
