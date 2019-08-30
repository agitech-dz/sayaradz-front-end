import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid,TextField } from 'react-admin';
import {  TextInput } from 'react-admin';



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
                    primaryText={record => record.id}
                   
                />
            }
            medium={
                <Datagrid >
                  <TextField label="NumChassis" source="id"/>
                  <TextField label="Couleur" source="color"/>
                  <TextField label="version" source="version"/>
                  <TextField label="Options" source="options"/>
                  <TextField label="Vendeur" source="seller"/>  
                  <TextField label="Prix en DA" />    
                </Datagrid>
            }
        />
    </List>
);



