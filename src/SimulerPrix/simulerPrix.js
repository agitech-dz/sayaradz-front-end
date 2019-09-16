import React, {Component} from 'react';
import { List, Datagrid,Toolbar, Responsive,SaveButton, TextField, ReferenceField ,SimpleList} from 'react-admin';
import { Filter, FormDataConsumer,CheckboxGroupInput , SelectArrayInput,ReferenceArrayInput,ReferenceInput, SelectInput, TextInput,SimpleForm} from 'react-admin';


const Title = () => {
    return <span>Simuler Prix</span>;
};

const PostFilter = (props) => (
  <Filter {...props}>
       <TextInput label="Search" source="q" alwaysOn />

       <ReferenceInput label="Modéle" source="models" reference="models" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Version" source="versions" reference="versions" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Couleur" source="colors" reference="colors" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Options" source="options" reference="options" allowEmpty>
            <CheckboxGroupInput optionText="name" />
        </ReferenceInput>
  </Filter>
);

const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="VERIFIER LA DISPONIBILITE"
            redirect="show"
            submitOnEnter={true}
        />
        <SaveButton
            label="AFFICHER LE PRIX"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const SimulerPrix = props => (
  <div>
   
    <SimpleForm toolbar={<PostCreateToolbar />} >
              <ReferenceArrayInput source="models" reference="models">
                  <SelectArrayInput label="Modèle" optionText="name" />
              </ReferenceArrayInput>

              <ReferenceArrayInput source="versions" reference="versions">
                  <SelectArrayInput label="Version" optionText="name" />
              </ReferenceArrayInput>

              <ReferenceArrayInput source="colors" reference="colors">
                  <SelectArrayInput label="Couleur" optionText="name" />
              </ReferenceArrayInput>

              <ReferenceArrayInput source="options" reference="options">
                  <CheckboxGroupInput label="Options" optionText="name"  />
              </ReferenceArrayInput>
    </SimpleForm>

    
     <List title={<Title />} {...props} filters={<PostFilter />}>
          <Datagrid rowClick="edit">
              <TextField source="id" />
              <TextField source="version" />
              <TextField source="color" />
              <TextField source="options" />
              <TextField source="seller" />
          </Datagrid>
      </List>
  </div> 
);

export default SimulerPrix;
