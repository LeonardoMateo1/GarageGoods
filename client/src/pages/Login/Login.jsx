import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav'
import SVG1 from '../../assets/Login_illustration.png'

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
        .then((res) => { console.log(res); navigate('/Dashboard') })
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
            <form onSubmit={handleLogin} className='w-[20rem] border rounded-xl h-[35rem] flex items-center justify-center shadow-md'>
              <div className='flex-col flex gap-5 w-[80%] h-[85%] items-center justify-between'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-3xl font-semibold'>Log In</h2>
                  <img src={SVG1} alt="signUp" className='object-cover w-full h-[15rem]' />
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-4'>
                  <p className='text-xs'>New to GarageGoods <Link to='/SignUp' className='font-bold text-blue-500'>Sign Up for Free</Link></p>
                  <div className='flex flex-col items-center justify-center w-full gap-3'>
                    <input type="text" onChange={handleLoginInputs} name='email' placeholder='Email' className='py-2 pl-3 pr-10 border rounded-2xl' />
                    <input type="password" onChange={handleLoginInputs} name='password' placeholder='Password' className='py-2 pl-3 pr-10 border rounded-2xl' />
                  </div>
                  <input type="submit" value="Login"  className='w-full py-2 rounded-md shadow-md cursor-pointer bg-action'/>
                </div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Login