import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategory } from '../../../features/actions/sides/sidesAction'

const Category = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categoryData } = useSelector(state => state.category)
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    return (
        <div className='space-y-6 p-4'>
            <div className='text-center font-medium text-2xl'>Category</div>
            <div class="max-w-6xl mx-auto space-y-3 overflow-x-auto">
                <div className=' flex justify-end items-center'><button type='submit' onClick={() => {
                    navigate('/createCategory')
                }} className='px-4 py-2 text-white bg-blue-600 rounded-md'>Add</button></div>
                <table class="w-full text-left border border-separate rounded border-slate-200" cellspacing="0">
                    <tbody>

                        <tr>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Id</th>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>

                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {
                            categoryData?.map(item => {
                                return <tr>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?._id}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.category}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><div className='space-x-3 text-white font-medium'><button className='px-4 py-2 bg-blue-600 rounded-md'>Edit</button><button className='px-4 py-2 bg-blue-600 rounded-md'>Delete</button></div></td>

                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Category