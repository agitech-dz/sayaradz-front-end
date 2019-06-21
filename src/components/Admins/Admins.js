import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField } from 'react-admin';

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
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                </Datagrid>
            }
        />
    </List>
);
