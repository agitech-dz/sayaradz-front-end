import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const ColorsTitle = () => {
    return <span>Coleurs</span>;
};

const ColorsFilter = (props) => (
    <Filter {...props}>
       
    </Filter>
);

export const ColorsList = props => (
    <List title={<ColorsTitle/>} {...props} filters={<ColorsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.name}`}
                   
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField label="Code" source="id"/>
                    <TextField label="Nom" source="name"/>
                    <TextField label="Model" source="model"/>
                    <TextField label="Prix de la couleur DA" source="tarif_price"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const ColorsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField label ="Code" source="id" />
            <TextInput source="name" />
            <TextInput source="model" />
        </SimpleForm>
    </Edit>
);

export const ColorsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput  label ="Code" source="id" />
            <TextInput source="name" />
            <TextInput source="model" />
        </SimpleForm>
    </Create>
);