import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField,EditButton } from 'react-admin';
import {BooleanField , DateField ,Edit,SimpleForm ,BooleanInput} from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const listStyles = {
    actions: {
        backgroundColor: 'Lavender',
    },
    header: {
        backgroundColor: 'Lavender',
    },
};
/**
 * Manufacturers users list
 *
 * @returns { List } the list of manufacturers users
 */
export const CommandList =withStyles(listStyles)(({ classes, ...props })  => (
    <List
    classes={classes}
    {...props}
   
    sort={{ field: 'last_seen', order: 'DESC' }}
   
>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `${record.id}`}
                    
                />
            }
            medium={
                <Datagrid  rowClick="edit">
                   
                    <TextField label="Code commande" source="id" />
                    <TextField label="Total" source="total" />
                    <TextField label="Client" source="automobilist" />
                    <TextField label="NumChassis de la voiture" source="car" />
                    <DateField  label="Date" source="date" />
                    <BooleanField label="Etat de la commande" source="isValidated" />
                    <TextField label="Montant" source="reservationAmount" />
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
));

export const CommandEdit = props => (
    <Edit title='Valider commande' {...props}>
        <SimpleForm>
        <TextField label="Code commande" source="id" />
        <TextField label="Utilisaateur fabricant" source= "manufacturer_user"/>
            <TextField label="Total" source="total" />
            <TextField label="Client"  source="automobilist" />
            <TextField  label="NumChassis de la voiture" source="car" />
            <BooleanInput  label="Etat de la commande"  source="isValidated" />
          
            <TextField  label="Montant"  source="reservationAmount" />
           
        
        </SimpleForm>
    </Edit>
);