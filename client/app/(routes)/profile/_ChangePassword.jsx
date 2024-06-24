import React from 'react'
import { useForm } from "react-hook-form"

const ChangePassword = () => {
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

                <div className="space-y-1">
                    <label htmlFor="mobile" className="block font-medium">
                        Current Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("currentPassword", { required: true })}
                            type="text"
                            id="mobile"
                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder='Current Password'
                        />
                        {errors.currentPassword && <span>This field is required</span>}
                        {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="newPassword" className="block font-medium">
                        New Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("newPassword", { required: true })}
                            type="text"
                            id="newPassword"
                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder='New Password'
                        />
                        {errors.newPassword && <span>This field is required</span>}
                        {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="confirmPassword" className="block font-medium">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("confirmPassword", { required: true })}
                            type="text"
                            id="confirmPassword"
                            className="w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder='Confirm Password'
                        />
                        {errors.confirmPassword && <span>This field is required</span>}
                        {/* <CheckIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500" /> */}
                    </div>
                </div>


                <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Save & continue
                </button>
            </form>
        </main>
    )
}

export default ChangePassword