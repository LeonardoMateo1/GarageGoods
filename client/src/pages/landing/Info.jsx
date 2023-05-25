import React from 'react'
import { Link } from 'react-router-dom';
import {RiShoppingCart2Fill} from 'react-icons/ri';
import {AiFillTags} from 'react-icons/ai';
import {CgArrowsExchange} from 'react-icons/cg';
import {MdConnectWithoutContact} from 'react-icons/md';


const Info = () => {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-[80%] h-full flex items-center justify-between'>
                <div className='grid justify-between flex-1 grid-cols-2 gap-y-10'>
                    <div className='w-[15rem] h-full p-5 shadow-sm border rounded-md bg-white'>
                        <RiShoppingCart2Fill className='text-[3rem] text-green-500 mb-4' />
                        <h3 className='mb-3 text-xl font-semibold'>Buy With Confidence</h3>
                        <p className='mb-4 text-light-text'>We offer a safe and secure platform.</p>
                        <p className='font-bold text-action'>Learn More</p>
                    </div>
                    <div className='w-[15rem] h-full p-5 shadow-sm border rounded-md bg-white'>
                        <AiFillTags className='text-[3rem] text-yellow-500 mb-4' />
                        <h3 className='mb-3 text-xl font-semibold'>Sell With Ease</h3>
                        <p className='mb-4 text-light-text'>Got stuff you no longer need?</p>
                        <p className='font-bold text-action'>Learn More</p>
                    </div>
                    <div className='w-[15rem] h-full p-5 shadow-sm border rounded-md bg-white'>
                        <CgArrowsExchange className='text-[3rem] text-blue-500 mb-4 ' />
                        <h3 className='mb-3 text-xl font-semibold'>Trade and Save</h3>
                        <p className='mb-4 text-light-text'>Trade, offer your stuff, and voila - everyone wins.</p>
                        <p className='font-bold text-action'>Learn More</p>
                    </div>
                    <div className='w-[15rem] h-full p-5 shadow-sm border rounded-md bg-white'>
                        <MdConnectWithoutContact className='text-[3rem] text-orange-500 mb-4 ' />
                        <h3 className='mb-3 text-xl font-semibold'>Connect and Grow</h3>
                        <p className='mb-4 text-light-text'>Share your passion for finding that unique item</p>
                        <p className='font-bold text-action'>Learn More</p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-3 text-right'>
                    <h2 className='items-start text-4xl font-bold '>Power at your fingertips</h2>
                    <p className='mb-5'>Embark on a treasure hunt to discover rare finds, turn your treasures into cash with ease, and treasure the connections you make along the way.</p>
                    <div>
                        <Link to='/SignUp' className='py-2 pr-5 text-2xl font-bold text-white rounded-lg pl-7 bg-action'><button>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info