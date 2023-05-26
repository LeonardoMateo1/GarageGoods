import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Nav'

const Login = () => {
  return (
    <div>
        <Nav/>
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-[20rem] border rounded-xl h-[30rem] flex flex-col items-center justify-center shadow-md'>
                <h2>Welcome Back</h2>
                <p>New to GarageGoods <Link to='/SignUp' className='font-bold text-blue-500'>Sign Up for Free</Link></p>
                <input type="text" name='email' className='' />
                <input type="text" name='password' className='' />
                <input type="submit" value="Login" />
            </div>
        </div>
    </div>
  )
}

export default Login