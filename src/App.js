import React from 'react';
import './style.scss';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     <Home/>
     {/* to show notifications */}
     <ToastContainer/> 
    </div>
  );
}

export default App;
