import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid,TextField , Edit, Create,TextInput,BooleanField, BooleanInput,ImageField, ImageInput } from 'react-admin';
import {   SimpleForm,ChipField} from 'react-admin';
import {withStyles} from '@material-ui/core/styles'

const styles = {
    image: { maxWidth:'8rem' }
  }
  



const NewcarsTitle = () => {
    return <span>Voitures</span>;
};


const NewcarsFilter = (props) => (
    <Filter {...props}>
       
    </Filter>
);

export const NewcarsList = withStyles(styles)(({ classes, permissions, ...props }) => (
    <List title={<NewcarsTitle />} {...props} filters={<NewcarsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                 
                   
                />
            }
            medium={
               
                   
                  <Datagrid >
                  <TextField label="NumChassis" source="id"/>
                  <TextField label="Couleur" source="color"/>
                  <TextField label="version" source="version"/>
                  <ChipField source="options"/>
                  <ImageField source="photo1" classes={classes} />
                  <TextField label="Vendeur" source="seller"/>  
                  <TextField label="Prix en DA" />
                  <BooleanField label="Existe" source="isExisted" />
               
                </Datagrid>
            }
        />
    </List>
));

export const NewcarsCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextField label="NumChassis" source="id"/>
                  <TextInput label="Couleur" source="color"/>
                  <TextInput label="version" source="version"/>
                  <ImageInput source="images" multiple={false} accept="image/*">
    <ImageField source="photo1"  />
</ImageInput>
                  <TextInput label="Vendeur" source="seller"/>  
                  <TextField label="Prix en DA" />
                  <BooleanInput label="Existe" source="isExisted" />
               
            
         
        </SimpleForm>
    </Create>
);


export const NewcarsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextField label="NumChassis" source="id"/>
                  <TextInput label="Couleur" source="color"/>
                  <TextInput label="version" source="version"/>
                  <ImageInput source="images" multiple={false} accept="image/*">
    <ImageField source="photo1"  />
</ImageInput>
                  <TextInput label="Vendeur" source="seller"/>  
                  <TextField label="Prix en DA" />
                  <BooleanInput label="Existe" source="isExisted" />
               
            
         
        </SimpleForm>
    </Edit>
);

