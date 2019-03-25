import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { ReferenceArrayInput,ChipField, SelectArrayInput,SingleFieldList,ReferenceArrayField, } from 'react-admin';

const VersionTitle = () => {
    return <span>Version Manage</span>;
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
                    primaryText={record => record.code_Version}
                    secondaryText={record => `${record.name_Version}`}
                    
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Code" source="code_Version"/>
                    <TextField label="Nom" source="name_Version"/>
                    <ReferenceArrayField label="Options" reference="Option" source="code_Options">
                <SingleFieldList>
                    <ChipField source="name_Option" />
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
            <TextInput source="code_Version" />
            <TextInput source="name_Version" />
            <ReferenceArrayInput source="code_Options" reference="Option">
    <SelectArrayInput optionText="name_Option" />
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
            <TextInput source="code_Version" />
            <TextInput source="name_Version" />
            <ReferenceArrayInput source="code_Options" reference="Option">
    <SelectArrayInput optionText="name_Option" />
</ReferenceArrayInput>
            

        </SimpleForm>
    </Create>
);

