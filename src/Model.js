import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const ModelTitle = () => {
    return <span>Model Manage</span>;
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
                    primaryText={record => record.code_Model}
                    secondaryText={record => `${record.name_Model}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code_Model"/>
                    <TextField label="Nom" source="name_Model"/>
                   
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
            <TextInput source="code_Model" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Edit>
);

export const ModelCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code_Model" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Create>
);

