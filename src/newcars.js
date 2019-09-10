import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid,TextField } from 'react-admin';
import {   ChipField} from 'react-admin';



const NewcarsTitle = () => {
    return <span>Voitures</span>;
};


const NewcarsFilter = (props) => (
    <Filter {...props}>
       
    </Filter>
);

export const NewcarsList = props => (
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
                  <TextField label="Vendeur" source="seller"/>  
                  <TextField label="Prix en DA" />
                
               
                </Datagrid>
            }
        />
    </List>
);



