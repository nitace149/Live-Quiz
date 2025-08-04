import React from 'react'
import { assets } from '../assets/asset'

const Join = () => {
    return (
        <div className='flex flex-col items-center h-screen justify-start '>
            <div className='flex flex-col items-center gap-1.5'>
                <img src={assets.full_logo} alt="" className='w-100 h-50' />

                <h1 className='text-4xl font-bold'>Enter the code to join</h1>
                <input type="text" placeholder='12345678' className='w-sm p-2 rounded-md font-bold border-none tracking-widest text-center' />
                <button className='bg-blue-500 text-white p-2 rounded-md w-sm'>Join</button>
            </div>
        </div>
    )
}

export default Join;