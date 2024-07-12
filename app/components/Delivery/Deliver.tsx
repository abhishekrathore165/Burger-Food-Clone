import Image from 'next/image'
import React from 'react'
import deliveryimg from '@/public/images/delivery.svg'
import { RiEBikeFill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'
const Deliver = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
       <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div data-aos="fade-right" data-aos-placement="top-center" >
            <Image src={deliveryimg} alt='delivery' />
        </div>
        <div>
            <h1 className='text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>Your <span className='text-red-600'>Favorite Burger</span> On the way</h1>
            <p className='mt-[2rem] text-black text-[17px] text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum debitis eligendi quia modi sed sequi quisquam quo quidem, nihil sapiente expedita quis vel! Odit.</p>
            <div className="flex items-center space-x-3 mt-[2rem]">
                <RiEBikeFill className='w-[2rem] h-[2rem] text-red-600'/>
                <h1 className='text-[18px] font-medium text-black'>Delivery in 30 minutes</h1>
            </div>
            <div className="flex items-center space-x-3 mt-[2rem]">
                <IoFastFood className='w-[2rem] h-[2rem] text-red-600'/>
                <h1 className='text-[18px] font-medium text-black'>Free Shipping from 75$</h1>
            </div>
            <div className="flex items-center space-x-3 mt-[2rem]">
                < BsDoorOpen className='w-[2rem] h-[2rem] text-red-600'/>
                <h1 className='text-[18px] font-medium text-black'>Delivery on your Doorstep</h1>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Deliver
