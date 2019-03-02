import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';

const ManufacturerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ManufacturerList = props => (
    <List {...props} filters={<ManufacturerFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.nationality}`}
                    tertiaryText={record => `${record.id}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="name"/>
                    <TextField source="nationality"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const ManufacturerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nationality" />
        </SimpleForm>
    </Edit>
);

export const ManufacturerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nationality" />
        </SimpleForm>
    </Create>
);

