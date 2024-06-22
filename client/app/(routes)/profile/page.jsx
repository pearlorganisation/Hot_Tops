import Link from 'next/link'
import React from 'react'

const page = ({ searchParams }) => {
    const { tab } = searchParams
    console.log(tab, "tab")
    return (
        <div>
            <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-y-0 md:space-x-8 bg-gray-100 min-h-screen">
                <aside className="w-full md:w-1/4 space-y-8">
                    <div>
                        <h2 className="text-xl font-bold">SETTINGS</h2>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/profile?tab=1" className={`block p-2 ${Number(tab) === 1 ? 'bg-red-500  text-white rounded-md' : 'text-red-500'}  `}>
                                    Update name / telephone number
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile?tab=2" className={`block p-2 ${Number(tab) === 2 ? 'bg-red-500  text-white rounded' : 'text-red-500'} hover:underline`}>
                                    Change your password
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block p-2 text-red-500 hover:underline">
                                    Delete my account
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 text-red-500 hover:underline">
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">ORDERS</h2>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/profile?tab=3" className={`block p-2 ${Number(tab) === 3 ? 'bg-red-500  text-white rounded' : 'text-red-500'} hover:underline`}>
                                    List all of your recent orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                {
                    Number(tab) === 1 && <main className="w-full md:w-3/4 bg-white p-8 rounded-md shadow-md">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label htmlFor="first-name" className="block font-medium">
                                        First Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="first-name"
                                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            defaultValue="Rahul"
                                        />
                                        {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="last-name" className="block font-medium">
                                        Last Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="last-name"
                                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            defaultValue="Rawat"
                                        />
                                        {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="mobile" className="block font-medium">
                                    Mobile *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        defaultValue="02085656656"
                                    />
                                    {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="telephone" className="block font-medium">
                                    Telephone
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="telephone"
                                        className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        defaultValue="02085656656"
                                    />
                                    {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <input type="checkbox" id="offers" className=" accent-red-500" />
                                <label htmlFor="offers" className="text-sm font-medium leading-none">
                                    Please send me exclusive deals and amazing pizza offers via email
                                </label>
                            </div>
                            <p className="text-sm text-gray-600">
                                Tops Pizza's does not sell, trade or rent your personal information to others. Any data collected will be
                                used solely for the purpose of providing the services you request, communicating information about our
                                brands, products and services and internal analysis.
                            </p>
                            <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Save & continue
                            </button>
                        </form>
                    </main>
                }
                {
                    Number(tab) === 2 && <main className="w-full md:w-3/4 bg-white p-8 rounded-md shadow-md">
                        <form className="space-y-6">

                            <div className="space-y-1">
                                <label htmlFor="mobile" className="block font-medium">
                                    Current Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder='Current Password'
                                    />
                                    {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="newPassword" className="block font-medium">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="newPassword"
                                        className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder='New Password'
                                    />
                                    {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="confirmPassword" className="block font-medium">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="confirmPassword"
                                        className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder='Confirm Password'
                                    />
                                    {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                                </div>
                            </div>


                            <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Save & continue
                            </button>
                        </form>
                    </main>
                }
                {
                    Number(tab) === 3 && <main className="w-full md:w-3/4 grid place-items-center bg-white p-8 rounded-md shadow-md">
                        <p className='font-medium text-2xl'>No Orders</p>
                    </main>
                }
            </div>
        </div>
    )
}

export default page

function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}