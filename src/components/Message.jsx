import React from 'react'
// individual messages
const Message = (props) => {
  // this owner variable is there to determine from which user message is sent, if user id is 1 then messages will be shown in right side,
  // if id is not 1 then messages will be shown in left side as they are sent by someone else
  let owner="owner";
  if(props.message.id!=="1"){
    owner="";
  }
  return (
    <div className={`message ${owner}`}>
       <div className="messageInfo">
         <img src={props.message.avatar} alt="" />
       </div>
       <div className="messageContent">
           <p>{props.message.message}</p>
       </div>
    </div>
  )
}

export default Message