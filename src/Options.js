import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const OptionsTitle = () => {
    return <span>Options Manage</span>;
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
                    primaryText={record => record.code_Option}
                    secondaryText={record => `${record.name_Option}`}
                    tertiaryText={record => `${record.name_Model}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code_Option"/>
                    <TextField label="Nom" source="name_Option"/>
                    <TextField label="Options" source="name_Model"/>
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
            <TextInput source="code_Option" />
            <TextInput source="name_Opton" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Edit>
);

export const OptionsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code_Option" />
            <TextInput source="name_Option" />
            <TextInput source="name_Model" />
        </SimpleForm>
    </Create>
);
