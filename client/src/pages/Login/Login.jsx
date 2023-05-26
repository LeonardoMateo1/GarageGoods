import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav'

const Login = () => {

  const [state, setState] = useState({
    login: {
      email: "",
      password: "",
    }
  })

  const navigate = useNavigate();
  const { login } = state;
  const [errors, setErrors] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/user/login", login, { withCredentials: true })
        .then((res) => { console.log(res); navigate('/') })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data);
        })
  }

  const handleLoginInputs = (e) => {
      setState({ ...state, login: { ...state.login, [e.target.name]: e.target.value } })
  }
  
  
  return (
    <div>
        <Nav/>
        <div className='flex items-center justify-center w-full h-screen'>
            <form onSubmit={handleLogin} className='w-[20rem] border rounded-xl h-[30rem] flex flex-col items-center justify-center shadow-md'>
                <h2>Welcome Back</h2>
                <p>New to GarageGoods <Link to='/SignUp' className='font-bold text-blue-500'>Sign Up for Free</Link></p>
                <input type="text" onChange={handleLoginInputs} name='email' className='border' />
                <input type="password" onChange={handleLoginInputs} name='password' className='border' />
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login