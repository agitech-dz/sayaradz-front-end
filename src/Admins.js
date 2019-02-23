import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField } from 'react-admin';

export const AdminList = props => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `${record.nom} ${record.prenom}`}
                    secondaryText={record => `${record.mail}`}
                    tertiaryText={record => `${record.id}`}
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="mail" />
                    <TextField source="nom" />
                    <TextField source="prenom" />
                </Datagrid>
            }
        />
    </List>
);
