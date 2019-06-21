import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { ReferenceArrayInput,ChipField, SelectArrayInput,SingleFieldList,ReferenceArrayField, } from 'react-admin';

const VersionTitle = () => {
    return <span>Versions</span>;
};

const VersionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const VersionList = props => (
    <List title={<VersionTitle/>} {...props} filters={<VersionFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.code}
                    secondaryText={record => `${record.name}`}
                    
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code"/>
                    <TextField label="Nom" source="name"/>
                    <ReferenceArrayField label="Options" reference="Option" source="options">
                <SingleFieldList>
                    <ChipField source="option" />
                </SingleFieldList>
            </ReferenceArrayField>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

export const VersionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="code" />
            <TextInput source="name" />
            <ReferenceArrayInput source="options" reference="Option">
    <SelectArrayInput optionText="option" />
</ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
/*<SelectArrayInput label="Tags" source="optionName" choices={[
    { code: '1', name: 'opt1 },
    { code: '2', name: 'opt2' },
    { code: '3', name: 'opt3' },
   
]} />*/
export const VersionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code" />
            <TextInput source="name" />
            <ReferenceArrayInput source="options" reference="Option">
    <SelectArrayInput optionText="option" />
</ReferenceArrayInput>
            

        </SimpleForm>
    </Create>
);

