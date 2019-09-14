import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { ChipField, SelectArrayInput , ImageInput, ImageField } from 'react-admin';
import {withStyles} from '@material-ui/core/styles'

const styles = {
    image: { maxWidth:'8rem' }
  }
  


const VersionTitle = () => {
    return <span>Versions</span>;
};

const VersionFilter = (props) => (
    <Filter {...props}>
        
    </Filter>
);

export const VersionList = withStyles(styles)(({ classes, permissions, ...props }) => (
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
                                     
                    <ImageField source="image" classes={classes} />
                    <ChipField source="options" />
            
 
            <TextField label="Modèle" source="model"/>
            <TextField label="Prix de la version DA" source="tarif_price"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
));

export const VersionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextField label="Code" source="id"/>
            <TextInput label="Nom" source="name" />
            <ImageInput source="images" multiple={false} accept="image/*">
    <ImageField source="image"  />
</ImageInput>
<SelectArrayInput label="options" source="options" choices={[
     { id: 'op1', name: 'Design Luxe' },
 
    { id: 'op2', name: 'Moteur 35 TFSI 150' },
    { id: 'op3', name: 'Climatiseur' },
    { id: 'op4', name: 'Wifi' },
    { id: 'op5', name: 'Wifi' },
    { id: 'op6', name: 'Boite de vitesse Auto' },
    { id: 'op7', name: 'Moteur 30 TDI 136' },
    { id: 'op8', name: '5 portes - 5 places' },
    { id: 'op9', name: 'Boîte manuelle' },
    { id: 'op10', name: 'Motorisation Electrique' },
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
            <ImageInput source="images" multiple={false} accept="image/*">
    <ImageField source="image"  />
</ImageInput>
          
<SelectArrayInput label="options" source="options" choices={[
  { id: 'op1', name: 'Design Luxe' },
 
    { id: 'op2', name: 'Moteur 35 TFSI 150' },
    { id: 'op3', name: 'Climatiseur' },
    { id: 'op4', name: 'Wifi' },
    { id: 'op5', name: 'Wifi' },
    { id: 'op6', name: 'Boite de vitesse Auto' },
    { id: 'op7', name: 'Moteur 30 TDI 136' },
    { id: 'op8', name: '5 portes - 5 places' },
    { id: 'op9', name: 'Boîte manuelle' },
    { id: 'op10', name: 'Motorisation Electrique' },
]} />
            
 <TextInput label="Modèle" source="model" />
        </SimpleForm>
    </Create>
);

