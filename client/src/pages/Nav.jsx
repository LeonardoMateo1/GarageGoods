import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiX} from 'react-icons/bi';

const Nav = () => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen)
    }


  return (
    <div>
        <nav className='flex justify-center w-full'>
            <ul className='flex w-[80%] h-full justify-between pt-7 items-center'>
                <li className='flex items-center gap-3'>
                    <div className='items-center block mt-1 md:hidden'>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "hidden" : ""}`}><AiOutlineMenu/></button>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "" : "hidden"}`}><BiX/></button>
                    </div>
                    <p className='text-3xl font-bold'>GarageGoods</p>
                </li>
                <li className='md:w-[20rem] flex justify-between items-center'>
                    <div className='hidden md:flex gap-7 text-light-text'>
                        <Link className='hover:text-black'>About</Link>
                        <Link className='hover:text-black'>Help</Link>
                    </div>
                    <div className='hidden gap-3 px-4 py-2 shadow-lg rounded-xl xs:flex bg-action'>
                        <Link>Login</Link>
                        <div className="hidden gap-3 md:flex">
                            <pc className='cursor-default'>|</pc>
                            <Link>Sign Up</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav