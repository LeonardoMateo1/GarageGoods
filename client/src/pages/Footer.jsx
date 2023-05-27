import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGooglePlusG} from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
        <div className=' bottom-0 w-full h-[65vh] bg-action flex justify-center items-center'>
            <div className='w-[80%] h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center w-full gap-5 border-b-2'>
                    <p className='text-3xl font-bold'>GarageGoods</p>
                    <p>+1 (234) 567-8910</p>
                    <p>1234 Street Anywhere</p>
                    <div className='flex items-center justify-center w-full gap-4 mb-10 text-2xl'>
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaGooglePlusG/>
                    </div>
                </div>
                <div className='mt-10'>
                    <p>@Copyright</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer