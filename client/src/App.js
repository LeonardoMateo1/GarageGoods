import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Landing from './pages/landing/Landing';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import UserDashboard from './pages/Dashboard/UserDashboard';

function App() {

  const [authorized, setAuthorized] = useState("");


  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/SignUp' element={<SignUp authorized={authorized} setAuthorized={setAuthorized}/>}/>
          <Route path='/Login' element={<Login authorized={authorized} setAuthorized={setAuthorized}/>}/>
          <Route path='/Dashboard' element={<UserDashboard setAuthorized={setAuthorized}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
