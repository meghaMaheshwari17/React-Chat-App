import React,{useState} from 'react'
// input for entering messages by user
const Input = (props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='input'>
      <input type="text" value={inputValue} placeholder="Type something.." onChange={(event)=>setInputValue(event.target.value)}/>
      <div className="send">
        <button onClick={()=>{
          props.handleInput(inputValue);
          setInputValue('');
          }}>Send</button>
      </div>
    </div>
  )
}

export default Input