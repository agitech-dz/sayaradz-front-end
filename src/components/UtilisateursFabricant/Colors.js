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
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ColorsList = props => (
    <List title={<ColorsTitle/>} {...props} filters={<ColorsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.code}
                    secondaryText={record => `${record.name}`}
                    tertiaryText={record => `${record.model}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code"/>
                    <TextField label="Nom" source="name"/>
                    <TextField label="Model" source="model"/>
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
            <TextInput source="code" />
            <TextInput source="name" />
            <TextInput source="model" />
        </SimpleForm>
    </Edit>
);

export const ColorsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code" />
            <TextInput source="name" />
            <TextInput source="model" />
        </SimpleForm>
    </Create>
);
