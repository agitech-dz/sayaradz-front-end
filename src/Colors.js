import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const ColorsTitle = () => {
    return <span>Colors Manage</span>;
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
                    primaryText={record => record.code_Colors}
                    secondaryText={record => `${record.name_Colors}`}
                    tertiaryText={record => `${record.name_Model}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code_Colors"/>
                    <TextField label="Nom" source="name_Colors"/>
                    <TextField label="Options" source="name_Model"/>
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
            <TextInput source="code_Colors" />
            <TextInput source="name_Colors" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Edit>
);

export const ColorsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code_Colors" />
            <TextInput source="name_Colors" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Create>
);
