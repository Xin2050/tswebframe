import {UserList} from "./views/UserList";
import {Collection} from "./models/Collection";
import {User, UserProps} from "./models/User";
import {UserEdit} from "./views/UserEdit";


const users = new Collection('http://localhost:3000/users',
    (json:UserProps)=>{
        return User.buildUser(json);
    })
users.on('change',()=>{
    const root = document.getElementById("root");
    if(root){
        new UserList(root,users).render();
    }
})
users.fetch();


const user = User.buildUser({name:"Name",age:30});
const editroot = document.getElementById("root_edit");
if(editroot) {
    const userEdit = new UserEdit(editroot,user);
    userEdit.render();
    console.log(userEdit);
}else{
    throw new Error('Root element not found');
}