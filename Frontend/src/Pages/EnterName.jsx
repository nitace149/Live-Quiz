import React from 'react'
import { assets } from '../assets/asset'

const EnterName = () => {
    return (

        <div className='h-screen flex items-center flex-col  justify-center bg-blue-200'>

            <img className='w-80 h-auto' src={assets.logo_text} alt="Logo" />
            <div className="flex flex-col items-center gap-6">
                <img className='w-50 rounded-full' src={assets.logo} alt="avtar" />
                <div className="flex flex-col w-full max-w-md px-6 gap-3">
                    <label className="mb-2 px-4 text-sm font-semibold text-left">Enter your name</label>
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl  text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    <button className='bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 '>Join Qiuz</button>
                </div>
            </div>




        </div>



    )
}

export default EnterName