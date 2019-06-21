import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton, SingleFieldList,SelectArrayInput, ChipField,ReferenceArrayInput } from 'react-admin';
import { Edit, SimpleForm, TextInput, ReferenceArrayField } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const NewcarsTitle = () => {
    return <span>Voitures</span>;
};

const NewcarsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const NewcarsList = props => (
    <List title={<NewcarsTitle />} {...props} filters={<NewcarsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.numChassis}
                   
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Num Chassis" source="numChassis"/>
                    <TextField label="Coleur" source="color"/>
                    <TextField label="Version" source="version"/>
                    <ReferenceArrayField label="Options" reference="Option" source="options">
                <SingleFieldList>
                    <ChipField source="option" />
                </SingleFieldList>
            </ReferenceArrayField>
                    <TextField label="nom du concessionnaire" source="seller"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const NewcarsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="numChassis" />
            <TextInput source="color" />
            <TextInput source="version" />
            <ReferenceArrayInput source="options" reference="Option">
    <SelectArrayInput optionText="option" />
</ReferenceArrayInput>
            <TextInput source="seller" />
        </SimpleForm>
    </Edit>
);

export const NewcarsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="numChassis" />
            <TextInput source="color" />
            <TextInput source="version" />
            <ReferenceArrayInput source="options" reference="Option">
    <SelectArrayInput optionText="option" />
</ReferenceArrayInput>
            <TextInput source="seller" />
        </SimpleForm>
    </Create>
);

