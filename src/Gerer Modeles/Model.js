import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';


const ModelTitle = () => {
    return <span>Modèles</span>;
};

const ModelFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />

    </Filter>
);

export const ModelList = props => (
    <List title={<ModelTitle />} {...props} filters={<ModelFilter />}>
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
                   
                   
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const ModelEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField label ="Code" source="id" />
            <TextInput label="Nom" source="name" />
            <TextField label="Utilisateur fabricant" source="manufacturer" />
        </SimpleForm>
    </Edit>
);

export const ModelCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label =" Code" source="id" />
            <TextInput label="Nom" source="name" />
            <TextInput  label="Utilisateur fabricant" source="manufacturer" />
        </SimpleForm>
    </Create>
);

