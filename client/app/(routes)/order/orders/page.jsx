"use client"

import React, { useState } from 'react'

const page = () => {
    const [step, setStep] = useState(1)
    return (
        <div className='min-h-screen container mx-auto p-4'>
            <div className=' flex gap-2'>
                {
                    [`Collection`, `Delivery`].map(item => {
                        return <button type='button' className='px-6 py-2 border-2 border-[#DC2626]  rounded text-white'>{item}</button>
                    })
                }
            </div>
        </div>
    )
}

export default page