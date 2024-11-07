import React from 'react'

export default function Suspended() {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#283752]'>
            <div className="border-2 max-w-3xl border-slate-500 rounded-md p-6">
                <h1 className='text-4xl font-bold text-white'>This Account Has Been Suspended</h1>
                <p className=' text-white text-lg mt-4'>Please contact your hosting provider</p>
            </div>
        </div>
    )
}
