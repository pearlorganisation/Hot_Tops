import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { cretaeCategory } from '../../../features/actions/sides/sidesAction'

const CreateFilter = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(cretaeCategory(data))
        console.log(data)
    }
    return (
        <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div className="bg-[#EF4444] px-10 py-10 text-center text-white">
                Create Sides Filter
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-8 py-10">
                <label className="block" htmlFor="name">
                    <p className="text-gray-600">Name</p>
                    <input
                        className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        type="text"
                        {...register("category", { required: true })}

                        placeholder="Enter your category name"
                    />
                    {errors.category && <span className='text-red-500'>This field is required</span>}
                </label>

                <button type='submit' className="mt-4 rounded-full bg-[#EF4444] px-10 py-2 font-semibold text-white">
                    Submit
                </button>
            </form>
        </div>

    )
}



export default CreateFilter