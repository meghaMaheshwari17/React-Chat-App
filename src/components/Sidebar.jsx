import React, { useState } from 'react'
import Navbar from './Navbar'
import Searchbar from './SearchBar'
import Chats from './Chats'
import AddUser from './AddUser'
import { useDispatch,connect, useSelector } from "react-redux";
import { addMessage } from '../redux/actions'
import { toast } from 'react-toastify';
const Sidebar = () => {
  const dispatch = useDispatch(); //to dispatch action to redux
  const allUsers = useSelector(state => state.messages); // getting all the users and their messages from redux store
  const [searchTerm,setSearchTerm]=useState(''); //user that is being searched in SearchBar component
  const [users,setUsers]=useState(allUsers);  //set users to allUsers
  const [showAddUser,setShowAddUser] = useState(false); //to show add user component
  
  // when a user is being searched in SearchBar component
  const handleSearch=(search)=>{
    // if input is empty then show all the users available
    if(search===''){
      setUsers(allUsers);
      return;
     }
    //  else show the users which are being searched for
     setSearchTerm(search);
     const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(searchTerm.toLowerCase()));
     setUsers(filteredUsers);
  }

  // when a user is added in the AddUser component
  const handleAddUser = (name,profileUrl) =>{
     const newUser={
      "id":`${allUsers.length+2}`,
      "name":`${name}`,
      "avatar":`${profileUrl}`,
      "messages":[]
     }
     let newUsers=[...allUsers,newUser];
    //  dispatch action to redux
     dispatch(addMessage(newUsers));
     setUsers(newUsers);
    // do not show the addUser component
     setShowAddUser(false);
    //  show notification
    toast.success('User added !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1000
     });
  }

  return (
    <div className='sidebar'>
      <Navbar />
      <Searchbar handleSearch={handleSearch}/>
      <button className="addUser" onClick={()=>setShowAddUser(true)}>Add user</button>
      {showAddUser ? <AddUser handleAddUser={handleAddUser}/> :<></>}
      <Chats users={users}/>
    </div>
  )
}

// export default Sidebar
export default connect(
  null,
)(Sidebar);