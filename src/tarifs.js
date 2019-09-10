import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { DeleteButton } from 'react-admin';

const TarifsTitle = () => {
    return <span>Tarifs</span>;
};

const TarifsFilter = (props) => (
    <Filter {...props}>
       
    </Filter>
);

export const TarifsList = props => (
    <List title={<TarifsTitle />} {...props} filters={<TarifsFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                 
                   
                />
            }
            medium={
                <Datagrid>
                  
                   
                    <TextField label="Code" source="code"/>
                    <TextField label="Date début" source="dateBegin"/>
                    <TextField label="Date fin" source="dateEnd"/>
                    <TextField label="Prix en DA" source="price"/>
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
      
            <TextField source="code" />
            <TextField label="Date début" source="dateBegin" />
            <TextField  label="Date fin" source="dateEnd" />
            <TextInput  label="Prix en DA" source="price" />
        </SimpleForm>
    </Edit>
);



