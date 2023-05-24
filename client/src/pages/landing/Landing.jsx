import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Info from './Info'
import smile from '../../assets/smile1.png'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Testimonial from './Testimonial'
import Footer from '../Footer'

const Landing = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center w-full h-screen gap-3'>
                <div className='w-[40%] flex flex-col justify-center'>
                    <h1 className='text-6xl font-bold leading-[135%]'>Your Friendly Neighborhood Marketplace</h1>
                    <p className='mb-10 text-2xl font-medium'>Trade, Buy - All in One Place</p>
                    <div>
                        <Link className='px-5 py-2 text-2xl font-bold text-white rounded-lg bg-action'><button>Start Here</button></Link>
                    </div>
                </div>
                <div>
                    <img src={smile} alt="" className='w-full h-[25rem] object-contain rounded-full bg-action' />
                    <div className='absolute right-[8rem] top-[12rem] z-10 bg-white flex flex-col items-center p-2 border rounded-md shadow-sm justify-normal'>
                        <p className='text-lg font-bold'>15k</p>
                        <p className='font-medium text-light-text '>Happy Customers</p>
                    </div>
                    <div className='absolute right-[8rem] top-[20rem] z-10 bg-white flex flex-col items-center p-2 border rounded-md shadow-sm justify-normal'>
                        <p className='text-lg font-bold'>+ 7.5k</p>
                        <p className='font-medium text-light-text '>Products Sold</p>
                    </div>
                    <div className='absolute right-[8rem] top-[28rem] z-10 bg-white flex flex-col items-center p-2 border rounded-md shadow-sm justify-normal'>
                        <p className='text-lg font-bold'>+ 30k</p>
                        <p className='font-medium text-light-text '>Members</p>
                    </div>
                </div>
            </div>
            <div className='absolute text-[35px] right-[15rem] top-[44rem] p-10 rounded-full shadow-lg -z-30'><AiOutlineArrowDown/></div>
            <Info/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default Landing