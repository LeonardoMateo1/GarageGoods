import React from 'react'
import Nav from '../Nav'

const Landing = () => {
    return (
        <div>
            <Nav/>
            <div className='absolute px-20 bg-action rounded-xl py-80 left-40 -z-10'></div>
            <div className='flex items-center justify-center w-full h-screen'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-5xl font-bold '>Welcome to GarageGoods</h1>
                    <p className='text-3xl'>Your Friendly Neighborhood Marketplace</p>
                </div>
            </div>
        </div>
    )
}

export default Landing