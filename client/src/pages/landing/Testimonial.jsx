import React from 'react'
import will from '../../assets/will.jpeg';
import willa from '../../assets/willa.jpeg';
import anthony from '../../assets/anthony.jpeg';

const Testimonial = () => {
  return (
    <div>
        <div className='w-full h-screen bg-gradient-to-r from-action to-yellow-600'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='w-[80%] h-full flex justify-between items-center'>
                    <div className='flex-1'>
                        <h3 className='text-sm font-bold text-white'>Testimonials</h3>
                        <p className='text-5xl font-bold w-[60%] mb-4'>What Our Members Say</p>
                        <p className=' font-md w-[79%] text-white'>Read the testimonials about our members to learn more about our platform</p>
                    </div>
                    <div className='flex flex-col flex-1 gap-5'>
                        <div className='w-[33rem] h-[10rem] bg-white shadow-md rounded-md'>
                            <img src={will} alt="" className='object-cover w-[3rem] h-[3rem] rounded-full relative top-4 left-4' />
                            <p className='relative left-[5rem] bottom-8 text-lg font-medium'> William Vinko</p>
                            <p className='relative left-[5rem] bottom-9 text-xs text-slate-400'>Music Teacher, Seattle, WA</p>
                            <p className='relative left-[5rem] bottom-5 text-xs w-[80%] p-2 bg-action rounded-xl'>
                                I've been using GarageGoods for over a year now, and it's been a game-changer.  
                                The buying process is straightforward, and I've never felt safer purchasing second-hand items online!
                            </p>
                        </div>
                        <div className='w-[33rem] h-[10rem] bg-white shadow-md rounded-md'>
                            <img src={willa} alt="" className='object-cover w-[3rem] h-[3rem] rounded-full relative top-4 left-4' />
                            <p className='relative left-[5rem] bottom-8 text-lg font-medium'> Isabella Fernandez</p>
                            <p className='relative left-[5rem] bottom-9 text-xs text-slate-400'>Professional Photographer, Austin, TX</p>
                            <p className='relative left-[5rem] bottom-5 text-xs w-[80%] p-2 bg-action rounded-xl'>
                                The listing process is a breeze, and I love that my items get to find a new home instead of ending up in a landfill. 
                                It's the perfect solution for decluttering and making some cash at the same time.
                            </p>

                        </div>
                        <div className='w-[33rem] h-[10rem] bg-white shadow-md rounded-md'>
                            <img src={anthony} alt="" className='object-cover w-[3rem] h-[3rem] rounded-full relative top-4 left-4' />
                            <p className='relative left-[5rem] bottom-8 text-lg font-medium'> Felix Mateo</p>
                            <p className='relative left-[5rem] bottom-9 text-xs text-slate-400'>College Student, San Francisco, CA</p>
                            <p className='relative left-[5rem] bottom-5 text-xs w-[80%] p-2 bg-action rounded-xl'>
                                As a student on a tight budget, GarageGoods has been a lifesaver. 
                                I've bought several items for my dorm room at a fraction of the cost of buying new.
                                A five-star experience, for sure!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial