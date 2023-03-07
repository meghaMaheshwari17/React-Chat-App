import React from 'react'
import {Routes, Route, BrowserRouter  as Router} from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
          <Router>
            {/* to display users */}
            <Sidebar/>
            {/* to display chat with particular user */}
            <Routes>
              {/* sending id so that we will know which data to access */}
              <Route path="/chat/:id" element={<Chat/>}/>
            </Routes>
          </Router>
        </div>
    </div>
  )
}

export default Home