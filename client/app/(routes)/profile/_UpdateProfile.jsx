"use client"
import { useAppSelector } from '@/app/lib/hooks'
import React from 'react'
import { useForm } from "react-hook-form"

const UpdateProfile = () => {
    const { userData, isUserLoggedIn } = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <main className="w-full md:w-3/4 bg-white p-8 rounded-md shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label htmlFor="first-name" className="block font-medium">
                            First Name *
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                {...register("firstName", { required: true })}
                                id="first-name"
                                className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder='Enter Your First Name'
                            />
                            {errors.firstName && <span>This field is required</span>}
                            {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="last-name" className="block font-medium">
                            Last Name *
                        </label>
                        <div className="relative">
                            <input
                                {...register("lastName", { required: true })}
                                type="text"
                                id="last-name"
                                className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder='Enter Your Last Name'
                            />
                            {errors.lastName && <span>This field is required</span>}
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
                            {...register("mobileNumber", { required: true })}
                            id="mobile"
                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder='Enter Mobile Number'
                        />
                        {errors.mobileNumber && <span>This field is required</span>}
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
                            placeholder='Enter Telephone'
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
    )
}

export default UpdateProfile