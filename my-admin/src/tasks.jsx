import { List, Create,SimpleForm,Edit, Datagrid, TextField, ReferenceField, TextInput, ReferenceInput, SelectInput } from 'react-admin';

export const TaskList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="status" />
            <ReferenceField source="assignedTo" reference='team_members'>
                <TextField source="name"/>
            </ReferenceField>
        </Datagrid>
    </List>
);

export const TaskEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <SelectInput source="status" choices={[
                { id: 'pending', name: 'pending' },
                { id: 'in progress', name: 'in progress' },
                { id: 'completed', name: 'completed' },
            ]}/>
            <ReferenceInput source="assignedTo" reference='team_members'>
                <SelectInput source="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TaskCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <SelectInput source="status" choices={[
                { id: 'pending', name: 'pending' },
                { id: 'in progress', name: 'in progress' },
                { id: 'completed', name: 'completed' },
            ]}/>
            <ReferenceInput source="assignedTo" reference='team_members'>
                <SelectInput source="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);