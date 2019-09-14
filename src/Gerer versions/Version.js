import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { ChipField, SelectArrayInput} from 'react-admin';

const VersionTitle = () => {
    return <span>Versions</span>;
};

const VersionFilter = (props) => (
    <Filter {...props}>
        
    </Filter>
);

export const VersionList = props => (
    <List title={<VersionTitle/>} {...props} filters={<VersionFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.name}`}
                    
                />
            }
            medium={
                <Datagrid rowClick="edit">
                    <TextField label="Code" source="id"/>
                    <TextField label="Nom" source="name"/>
                   
                    <ChipField source="options" />
            
 
            <TextField label="Modèle" source="model"/>
            <TextField label="Prix de la version DA" source="tarif_price"/>
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
        <TextField label="Code" source="id"/>
            <TextInput label="Nom" source="name" />
                   
<SelectArrayInput label="options" source="options" choices={[
     { id: 'o1', name: 'option1' },
    { id: 'o2', name: 'o2' },
    { id: 'o3', name: 'o3' },
    { id: 'o4', name: 'opt4' },
    { id: 'o5', name: 'opt5' },
    { id: 'o6', name: 'opt6' },
    { id: 'o7', name: 'opt7' },
]} />
 <TextField label="Modèle" source="model" />
        </SimpleForm>
    </Edit>
);

export const VersionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Code" source="id" />
            <TextInput label="Nom" source="name" />
          
<SelectArrayInput label="options" source="options" choices={[
    { id: 'o1', name: 'option1' },
    { id: 'o2', name: 'o2' },
    { id: 'o3', name: 'o3' },
    { id: 'o4', name: 'opt4' },
    { id: 'o5', name: 'opt5' },
    { id: 'o6', name: 'opt6' },
    { id: 'o7', name: 'opt7' },
]} />
            
 <TextInput label="Modèle" source="model" />
        </SimpleForm>
    </Create>
);
