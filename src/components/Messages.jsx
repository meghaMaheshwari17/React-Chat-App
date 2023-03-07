import React from 'react'
import Message from './Message'
// here all the individual messages are shown in one component
const Messages = (props) => {
  return (
    <div className="messages">
      {/* iterating through all the messages*/}
        {props.messages.map((message,index) =>{
          return <Message message={message} key={index}/>
        })}
    </div>
  )
}

export default Messages