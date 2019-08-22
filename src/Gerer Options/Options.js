import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const OptionsTitle = () => {
    return <span>Options</span>;
};

const OptionsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const OptionsList = props => (
    <List title={<OptionsTitle/>} {...props} filters={<OptionsFilter />}>
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
                    <TextField label="Modèle" source="model"/>
                    <TextField label="Prix de l'option DA" source="tarif_price"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const OptionsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextField label ="Code" source="id" />
            <TextInput label="Nom" source="name" />
            <TextField label ="Modèle" source="model" />
        </SimpleForm>
    </Edit>
);

export const OptionsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label ="Code" source="id" />
            <TextInput label="Nom" source="name" />
            <TextInput label ="Modèle" source="model" />
        </SimpleForm>
    </Create>
);
