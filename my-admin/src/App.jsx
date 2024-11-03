import { Admin, Resource, ListGuesser } from "react-admin";
import {PocketBaseProvider} from "./ra-pocketbase";
import { MemberList,MemberShow } from "./taskMembers";
import { TaskList } from "./tasks";


const pbProvider = PocketBaseProvider("https://friendly-space-parakeet-979j679gx94qhgr9-8090.app.github.dev/")

const App = () => (
  <Admin 
  dataProvider={pbProvider.dataProvider}
  // authProvider={pbProvider.authProvider}
  >
    <Resource name="team_members" list={MemberList} show={MemberShow}/>
    <Resource name="tasks" list={TaskList} />
  </Admin>
);

export default App;