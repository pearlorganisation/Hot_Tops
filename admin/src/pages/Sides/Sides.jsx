import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSides } from '../../features/actions/sides/sidesAction'


const Sides = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { sides } = useSelector(state => state.category)
    useEffect(() => {
        dispatch(getSides())
    }, [])

    return (
        <div className='space-y-6 p-4'>
            <div className='text-center font-medium text-2xl'>Sides</div>
            <div class="max-w-6xl mx-auto space-y-3 overflow-x-auto">
                <div className=' flex justify-end items-center'><button type='submit' onClick={() => {
                    navigate('/createSides')
                }} className='px-4 py-2 text-white bg-blue-600 rounded-md'>Add</button></div>
                <table class="w-full text-left border border-separate rounded border-slate-200" cellspacing="0">
                    <tbody>

                        <tr>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Id</th>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Price</th>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                                Category
                            </th>
                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">filter</th>

                            <th scope="col" class="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {
                            sides?.map(item => {
                                return <tr>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?._id}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.sideName}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.price}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.category?.category}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.filter?.filter}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><div className='space-x-3 text-white font-medium flex justify-center items-center'><button className='px-4 py-2 bg-blue-600 rounded-md'>Edit</button><button className='px-4 py-2 bg-blue-600 rounded-md'>Delete</button></div></td>

                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}




export default Sides