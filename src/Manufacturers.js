import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const ManufacturerTitle = () => {
    return <span>Fabricants</span>;
};

const ManufacturerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ManufacturerList = props => (
    <List title={<ManufacturerTitle />} {...props} filters={<ManufacturerFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.nationality}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Nom" source="name"/>
                    <TextField label="Nationalité" source="nationality"/>
                    <EditButton/>
                    <DeleteButton/>
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

