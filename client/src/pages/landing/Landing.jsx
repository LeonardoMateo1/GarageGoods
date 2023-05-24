import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Concept from './Concept'
import smile from '../../assets/smile1.png'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Landing = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center w-full h-screen gap-3'>
                <div className='w-[40%] flex flex-col justify-center'>
                    <h1 className='text-6xl font-bold leading-[135%]'>Your Friendly Neighborhood Marketplace</h1>
                    <p className='mb-10 text-2xl font-medium'>Trade, Buy - All in One Place</p>
                    <div>
                        <Link className='px-5 py-2 text-2xl text-white rounded-full bg-action'><button>Start Here</button></Link>
                    </div>
                </div>
                <div>
                    <img src={smile} alt="" className='w-full h-[25rem] object-contain rounded-full bg-action' />
                </div>
            </div>
            <div className='absolute text-[35px] right-[15rem] top-[44rem] p-10 rounded-full shadow-lg'><AiOutlineArrowDown/></div>
            <Concept/>
        </div>
    )
}

export default Landing