import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav'
import SVG1 from '../../assets/SignUp_illustration.png';
import SVG2 from '../../assets/SignUp_2_illustration.png';
import SVG3 from '../../assets/SignUp_3_illustration.png';
import {RiArrowGoBackLine} from 'react-icons/ri';

const SignUp = () => {
    
    const [state, setState] = useState({
      register: {
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
      }
    })
    
    const navigate = useNavigate();
    const { register } = state;
    const [errors, setErrors] = useState([]);
    
    const [signUpMenu, setSignUpMenu] = useState(1);
    
    
    const handleForwardMenu = () => {
        setSignUpMenu(prevMenu => prevMenu < 3 ? prevMenu + 1 : prevMenu);
    };
    
    const handleBackwardMenu = () => {
        setSignUpMenu(prevMenu => prevMenu > 1 ? prevMenu - 1 : prevMenu);
    };

    const handleRegInputs = (e) => {
        setState({ ...state, register: { ...state.register, [e.target.name]: e.target.value } })
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", register, { withCredentials: true })
            .then((res) => { console.log(res); navigate('/Dashboard') })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    
  return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center w-full h-screen'>
                <form onSubmit={handleRegistration} className='w-[20rem] border rounded-xl h-[35rem] flex items-center justify-center shadow-md'>
                    <div className={`${signUpMenu === 1 ? "flex" : "hidden" } flex-col gap-5 w-[80%] h-[85%] items-center justify-between`}>
                        <div>
                            <img src={SVG1} alt="signUp" className='object-cover w-full h-[15rem]' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <div className='errors'>{ errors.firstName ? errors.firstName.message : null}</div>
                                <input type="text" placeholder='First Name' name='firstName' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            </div>
                            <div>
                                <div className="errors">{ errors.lastName ? errors.lastName.message : null }</div>
                                <input type="text" placeholder='Last Name' name='lastName' onChange={handleRegInputs} className='py-2 pl-3 pr-10 border rounded-2xl'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <button type='button' onClick={handleForwardMenu} className='p-2 rounded-md shadow-md bg-action'>Next</button>
                        </div>
                    </div>
                    <div className={`${signUpMenu === 2 ? "flex" : "hidden" } flex-col gap-5 w-[80%] h-[85%] items-center justify-between`}>
                        <div>
                            <img src={SVG2} alt="signUp" className='object-cover w-full h-[15rem]' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <div className="errors">{ errors.email ? errors.email.message : null }</div>
                               <input type="text" placeholder='Email' name='email' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            </div>
                            <div>
                                <div className="errors">{ errors.confirmEmail ? errors.confirmEmail.message : null }</div>
                                <input type="text" placeholder='Confirm Email' name='confirmEmail' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <button type='button' onClick={handleBackwardMenu} className='p-2 rounded-md shadow-md'><RiArrowGoBackLine/></button>
                            <button type='button' onClick={handleForwardMenu} className='p-2 rounded-md shadow-md bg-action'>Next</button>
                        </div>
                    </div>
                    <div className={`${signUpMenu === 3 ? "flex" : "hidden" } flex-col gap-5 w-[80%] h-[85%] items-center justify-between`}>
                        <div>
                            <img src={SVG3} alt="signUp" className='object-cover w-full h-[15rem]' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <div className="errors">{ errors.password ? errors.password.message : null}</div>
                                <input type="password" placeholder='Password' name='password' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            </div>
                            <div>
                                <div className="errors">{ errors.confirmPassword ? errors.confirmPassword.message : null}</div>
                                <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <button type='button' onClick={handleBackwardMenu} className='p-2 rounded-md shadow-md'><RiArrowGoBackLine/></button>
                            <button onClick={handleForwardMenu} className='p-2 rounded-md shadow-md bg-action'>Sign Up</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default SignUp