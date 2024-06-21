"use client"

import React, { useEffect, useState } from 'react'

const page = () => {
    const [step, setStep] = useState(1)

    const [dayTimeIntervals, setDayTimeIntervals] = useState([]);

    useEffect(() => {
        generateDayTimeIntervals();
    }, []);

    const generateDayTimeIntervals = () => {
        const intervals = [];
        const start = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = daysOfWeek[start.getDay()];

        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setHours(23, 59, 0, 0);

        while (start <= end) {
            intervals.push({
                day: day,
                time: start.toTimeString().slice(0, 5),
            });
            start.setMinutes(start.getMinutes() + 15);
        }

        setDayTimeIntervals(intervals);
    };
    return (
        <div className='min-h-screen space-y-5 container mx-auto p-4'>
            <div className=' flex gap-2'>
                {
                    [{ name: `Collection`, no: 1 }, { name: `Delivery`, no: 2 }].map(item => {
                        return <button onClick={() => {
                            setStep(item?.no)
                        }} type='button' className={`px-6 py-2 border-2 ${step === item?.no ? 'text-white bg-[#DC2626]' : 'text-[#DC2626]'}  border-[#DC2626]  rounded font-medium`}>{item?.name}</button>
                    })
                }
            </div>
            <div>
                {
                    step === 1 && <div className=' border-t-2 p-2 space-y-6'>
                        <div className='space-y-1'>
                            <h1>Please Select Time</h1>
                            <select id="day" name="day" className="px-4 py-2 border-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent">
                                {dayTimeIntervals.map((interval, index) => (
                                    <option key={index} value={`${interval.day}-${interval.time}`}>
                                        {interval.day} - {interval.time}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="bg-red-500 p-6 rounded-md text-white">
                            <h2 className="font-bold text-lg mb-4">ORDERING INFORMATION:</h2>
                            <p className="mb-4">
                                <strong>Please note:</strong>{" "}
                                <a href="#" className="underline">
                                    Orders take a minimum of 45 minutes
                                </a>{" "}
                                to deliver. Whilst we endeavour to get your order to you on time, there may be delays during busier periods.
                            </p>
                            <p className="mb-4">
                                If you have any issues with your Tops Pizza order or experience, in the first instance please contact the Tops
                                Store you ordered from directly.
                            </p>
                            <p className="mb-2">Your order is being placed with:</p>
                            <p className="font-bold">Watford</p>
                            <p className="flex items-center mt-2">
                                <PhoneIcon className="mr-2" />
                                0192 324 6666
                            </p>
                        </div> <button type="button">Proceed To Checkout</button>
                    </div>
                }
                {
                    step === 2 && <div>2</div>
                }
            </div>
        </div>
    )
}

export default page

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}