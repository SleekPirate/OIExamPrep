import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const TaskList = () => (
    <List>
        <Datagrid>
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="status" />
            <ReferenceField source="assignedTo" reference='tasks'>
                <TextField source="name"/>
            </ReferenceField>
        </Datagrid>
    </List>
);