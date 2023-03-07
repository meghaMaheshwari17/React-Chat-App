import React, { useState } from 'react'

// to add user by name and profile url
const AddUser = (props) => {
    const [name,setName]=useState('');
    const [profileUrl,setProfileUrl]=useState('');
  return (
    <div className="AddUser">
       <input type="text" placeholder="Add name of user" onChange={(event)=>setName(event.target.value)}/>
       <input type="text" placeholder="Add profile image url" onChange={(event)=>setProfileUrl(event.target.value)}/>
       <button onClick={()=>props.handleAddUser(name,profileUrl)}>Submit</button>
    </div>
  )
}

export default AddUser