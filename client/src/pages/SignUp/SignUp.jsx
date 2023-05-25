import React, { useState, useEffect } from 'react'
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
          password: "",
          confirmPassword: ""
      }
    })
    
    const navigate = useNavigate();
    const { register } = state;
    const [errors, setErrors] = useState([]);
    
    const [signUpMenu, setSignUpMenu] = useState(1);
    
    
    const handleForwardMenu = () => {
        setSignUpMenu(prevMenu => prevMenu < 3 ? prevMenu + 1 : prevMenu);
        console.log(signUpMenu);  // Log the current state (may not reflect the latest update)
    };
    
    const handleBackwardMenu = () => {
        setSignUpMenu(prevMenu => prevMenu > 1 ? prevMenu - 1 : prevMenu);
        console.log(signUpMenu);  // Log the current state (may not reflect the latest update)
    };

    useEffect(() => {
        console.log(signUpMenu); // Will log the updated value whenever signUpMenu changes.
      }, [signUpMenu]);



    const handleRegInputs = (e) => {
        setState({ ...state, register: { ...state.register, [e.target.name]: e.target.value } })
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", register, { withCredentials: true })
            .then((res) => { console.log(res); navigate('/user/todos') })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    
  return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center w-full h-screen'>
                <form onSubmit={handleRegistration} className='w-[20rem] border rounded-xl h-[30rem] flex items-center justify-center shadow-md'>
                    <div className={`${signUpMenu === 1 ? "flex" : "hidden" } flex-col gap-5 w-[80%] h-[85%] items-center justify-between`}>
                        <div>
                            <img src={SVG1} alt="signUp" className='object-cover w-full h-[15rem]' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <input type="text" placeholder='First Name' name='firstName' onChange={handleRegInputs}  className='py-2 pl-3 pr-10 border rounded-2xl' />
                            <input type="text" placeholder='Last Name' name='lastName' onChange={handleRegInputs} className='py-2 pl-3 pr-10 border rounded-2xl'/>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <button type='button' onClick={handleForwardMenu} className='p-2 rounded-md shadow-md bg-action'>Next</button>
                        </div>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

export default SignUp