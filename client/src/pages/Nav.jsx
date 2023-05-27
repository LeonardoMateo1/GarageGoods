import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiX} from 'react-icons/bi';

const Nav = (props) => {
    

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen)
    }




  return (
    <div>
        <nav className='fixed z-30 flex justify-center w-full pb-6 bg-white shadow-sm'>
            <ul className='flex w-[80%] h-full justify-between pt-7 items-center'>
                <li className='flex items-center gap-3'>
                    <div className='items-center block mt-1 md:hidden'>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "hidden" : ""}`}><AiOutlineMenu/></button>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "" : "hidden"}`}><BiX/></button>
                    </div>
                    <Link to='/' className='text-3xl font-bold'>GarageGoods</Link>
                </li>
                <li className='md:w-[20rem] flex justify-between items-center'>
                    <div className='hidden md:flex gap-7 text-light-text'>
                        <Link className='hover:text-black'>About</Link>
                        <Link className='hover:text-black'>Help</Link>
                    </div>
                    <div className='hidden gap-3 px-4 py-1 shadow-lg rounded-xl xs:flex bg-action'>
                        <Link to='/Login' className='transition-transform duration-300 transform hover:scale-105'>Login</Link>
                        <div className="hidden gap-3 md:flex">
                            <p className='cursor-default'>|</p>
                            <Link to='/SignUp' className='transition-transform duration-300 transform hover:scale-105'>Sign Up</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav