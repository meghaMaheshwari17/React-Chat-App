import React from 'react'
import Input from './Input'
import Messages from './Messages'
import { useParams } from 'react-router-dom'
import { useDispatch,connect, useSelector  } from "react-redux";
import { addMessage } from '../redux/actions'
import { toast } from 'react-toastify';

const Chat = () => {
  const allMessages = useSelector(state => state.messages); //to get the  state with all the messages from redux store
  const {id}=useParams();  //get id of which particualr user's chat we have to open from param
  const user=allMessages[parseInt(id)-2];  //get the user by id
  const dispatch = useDispatch();
  const handleInput=(mess)=>{
    // add the message that user has sent to the allMessages state in redux
     const result={
      "id":"1",
      "message":`${mess}`,
      "avatar":"https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg"
     };
     let newMessages=[...allMessages];
     newMessages[parseInt(id)-2].messages.push(result);
    dispatch(addMessage(newMessages));

    // show notification that message is sent
    toast.success('Message sent !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1000
     });
  }
  return (
    <div className='chat'>
      {/* top bar of chat */}
      {/* if user is present then show its name and messages */}
      {user!==null ? <>
       <div className="chatInfo">
         <span>{user.name}</span>
      </div>
      {/* to show messages */}
       <Messages messages={user.messages}/>
       {/* input where user can send messages */}
      <Input handleInput={handleInput}/>
      </>
      : <> </> 
      }
    </div>
  )
}

// export default Chat
export default connect(
  null,
  { addMessage}
)(Chat);