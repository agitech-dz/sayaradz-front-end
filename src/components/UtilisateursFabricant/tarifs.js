import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const TarifsTitle = () => {
    return <span>Modèles</span>;
};

const TarifsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const TarifsList = props => (
    <List title={<TarifsTitle />} {...props} filters={<TarifsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.code}
                    secondaryText={record => `${record.type}`}
                   
                />
            }
            medium={
                <Datagrid>
                   <TextField label="Type" source="type"/>
                    <TextField label="Code" source="code"/>
                    <TextField label="Date début" source="dateBegin"/>
                    <TextField label="Date fin" source="dateEnd"/>
                    <TextField label="Prix" source="price"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const TarifsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="type" />
            <TextInput source="code" />
            <TextInput source="dateBegin" />
            <TextInput source="dateEnd" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);

export const TarifsCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="type" />
            <TextInput source="code" />
            <TextInput source="dateBegin" />
            <TextInput source="dateEnd" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>
);

