import React from 'react';
import { Link } from 'react-router-dom';
// this is shown in sidebar
const Chats = (props) => {
  return (
    <div className='chats'>
      {/* iterate over users list sent from Sidebar component and show them */}
      {props.users.map((user,index) => {
        return (
          // when link is clicked it will open up the Chat component of that particular user
          <Link to={`chat/${user.id}`} style={{ textDecoration: 'none' }} key={index}>
          <div className='userChat'>
            <img
              src={user.avatar}
              alt=''
            />
            <div className='userChatInfo'>
              <span>{user.name}</span>
              <p>{user.messages.length>0 ? user.messages.at(-1).message : ""}</p>
            </div>
          </div>
          </Link>
        );
      })}
      {/* <div className="userChat">
        <img src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <div className="userChatInfo">
          <span>Rachel</span>
          <p>Hey</p>
        </div>
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <div className="userChatInfo">
          <span>Ross</span>
          <p>Hey</p>
        </div>
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <div className="userChatInfo">
          <span>Moira</span>
          <p>Hey</p>
        </div>
      </div> */}
    </div>
  );
};

export default Chats;
