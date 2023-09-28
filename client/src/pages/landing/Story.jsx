import React from 'react'
import marketplace from '../../assets/marketplace_image.jpg';

const Story = () => {
  return (
    <div>
        <div className='w-full h-[80vh] flex items-center justify-center max-width px-4 flex-col'>
            <div className='flex flex-col items-center justify-center w-full mb-[7rem] text-center'>
                <h3 className='mb-10 text-4xl font-bold'>Our Story</h3>
                <p className='font-semibold text-md'>
                    At its core, "GarageGoods is more than just a success story of an online marketplace. 
                    It is a testament to human connection, the value of second chances, and the transformative power of a community-focused approach in the digital age. 
                    By the end of this captivating journey, readers gain an insight into how GarageGoods became an integral part of its users' lives, 
                    making a significant socio-economic impact and paving the way for the future of sustainable e-commerce."
                </p>
            </div>
            <img src={marketplace} alt="marketplace" className='w-full h-[30rem] object-cover object-bottom' />
        </div>
    </div>
  )
}

export default Story