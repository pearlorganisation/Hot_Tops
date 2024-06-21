import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { createFilter, getCategory, getFilter } from '../../features/actions/sides/sidesAction'
import Select from 'react-select'


const CreateSides = () => {
    const { filterData, categoryData } = useSelector(state => state.category)
    const [sideFilterData, setFilterData] = useState([])
    const [sideCategoryData, setCategoryData] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(createFilter(data))
        console.log(data)
    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    useEffect(() => {
        dispatch(getCategory())
        dispatch(getFilter())
    }, [])

    useEffect(() => {
        if (categoryData.length) {
            setCategoryData(prev => {
                const temp = categoryData.map(item => {
                    return { value: item?._id, label: item?.category }
                })
                return temp
            })


        }

    }, [categoryData])

    useEffect(() => {

        if (filterData.length > 0) {
            setFilterData(prev => {
                const temp = filterData.map(item => {
                    return { value: item?.filter, label: item?.filter }
                })
                return temp
            })
        }
    }, [filterData])
    console.log(sideFilterData, "filterData")


    return (
        <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div className="bg-[#EF4444] px-10 py-10 text-center text-white">
                Create Sides
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-8 py-10">
                <label className="block" htmlFor="name">
                    <p className="text-gray-600">Name</p>
                    <input
                        className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        type="text"
                        {...register("sideName", { required: true })}

                        placeholder="Enter your sides name"
                    />
                    {errors.sideName && <span className='text-red-500'>This field is required</span>}
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-gray-600">Price</p>
                    <input
                        className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        type="text"
                        {...register("price", { required: true })}

                        placeholder="Enter your price"
                    />
                    {errors.price && <span className='text-red-500'>This field is required</span>}
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-gray-600">Category</p>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <Select
                                options={sideCategoryData}
                                onChange={(val) => {
                                    onChange(val);

                                }}
                            />
                        )}
                        rules={{
                            required: { message: "Category is required", value: true },
                        }}
                    />
                    {errors.category && <span className='text-red-500'>This field is required</span>}
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-gray-600">Filter</p>
                    <Controller
                        name="filter"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <Select
                                options={filterData}
                                onChange={(val) => {
                                    onChange(val);

                                }}
                            />
                        )}
                        rules={{
                            required: { message: "Filter is required", value: true },
                        }}
                    />
                    {errors.filter && <span className='text-red-500'>This field is required</span>}
                </label>

                <button type='submit' className="mt-4 rounded-full bg-[#EF4444] px-10 py-2 font-semibold text-white">
                    Submit
                </button>
            </form>
        </div>

    )
}





export default CreateSides