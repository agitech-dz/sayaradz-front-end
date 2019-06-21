import React from 'react';
import { Filter } from 'react-admin';
import { List, Responsive, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Create } from 'react-admin';
import { DeleteButton } from 'react-admin';

const ManufacturerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Rechercher" source="q" alwaysOn />
    </Filter>
);

/**
 * Manufacturers list
 *
 * @returns { List } the list of manufacturers
 */
export const ManufacturerList = props => (
    <List title='Liste des fabricants' {...props} filters={<ManufacturerFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.nationality}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Nom" source="name"/>
                    <TextField label="Nationalité" source="nationality"/>
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
            }
        />
    </List>
);

/**
 * Manufacturers edit form
 *
 * @returns { Edit } the edit form of a manufacturer
 */
export const ManufacturerEdit = props => (
    <Edit title='Modifier un fabricant' {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nationality" />
        </SimpleForm>
    </Edit>
);

/**
 * Manufacturers create form
 *
 * @returns { Create } the create form of a manufacturer
 */
export const ManufacturerCreate = props => (
    <Create title='Créer un fabricant' {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nationality" />
        </SimpleForm>
    </Create>
);
