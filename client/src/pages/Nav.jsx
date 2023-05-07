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
        <nav className='w-full flex justify-center'>
            <ul className='flex w-[80%] h-full justify-between pt-7 items-center'>
                <li className='flex items-center gap-3'>
                    <div className='block md:hidden items-center mt-1'>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "hidden" : ""}`}><AiOutlineMenu/></button>
                        <button onClick={toggleNavMenu} className={`${isNavMenuOpen ? "" : "hidden"}`}><BiX/></button>
                    </div>
                    <p className='text-3xl'>U<span className='text-red-500'>BUY</span>WE<span className='text-green-500'>SHIP</span></p>
                </li>
                <li className='md:w-[20rem] flex justify-between'>
                    <div className='hidden md:flex gap-7'>
                        <Link>About</Link>
                        <Link>Help</Link>
                    </div>
                    <div className='hidden xs:flex gap-3'>
                        <Link>Login</Link>
                        <div className="hidden md:flex gap-3">
                            <p>|</p>
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