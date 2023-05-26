import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import UserDashboard from './pages/Dashboard/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Dashboard' element={<UserDashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
