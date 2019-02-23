import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
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
                    <EmailField source="mail" />
                    <TextField source="nom" />
                    <TextField source="prenom" />
                    <TextField source="adr" />
                    <TextField source="tel" />
                    <TextField source="nom_fab" />
                    <TextField source="bloque" />
                </Datagrid>
            }
        />
    </List>
);
