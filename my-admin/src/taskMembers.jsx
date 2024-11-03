import { List, Datagrid, TextField, Show, SimpleShowLayout, RichTextField} from 'react-admin';

export const MemberList = () => (
    <List>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="email" label="Email" />
        </Datagrid>
    </List>
);

export const MemberShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="name" label="Name" />
        <TextField source="email" label="Email" />
        </SimpleShowLayout>
    </Show>
)