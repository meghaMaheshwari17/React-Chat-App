import React from 'react'
import { useDispatch} from 'react-redux'
import { reset } from '../redux/actions'
// shown above sidebar
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
       <span className="logo">React-Chat</span>
       {/* current dummy user */}
       <div className="user">
        <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg" alt=""/>
        <span>Joey</span>
        {/* to reset to original state in the redux state */}
        <button onClick={()=>{
          dispatch(reset())
          }}>Clear</button>
       </div>
    </div>
  )
}

export default Navbar