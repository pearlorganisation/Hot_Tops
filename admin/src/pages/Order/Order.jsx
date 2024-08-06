import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Stack,Skeleton } from '@mui/material';
import Delete from '../../components/delete';
import { getAllOrders } from '../../features/actions/order/order';
import { MdCreditCard } from "react-icons/md";
import { AiFillPoundCircle } from "react-icons/ai";
import OrderViewModal from './OrderViewModal';



const Order = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { orderData,isLoading } = useSelector(state => state.order)

    const [showViewModal,setShowViewModal] = useState(false)
    const [viewData,setViewData]= useState()
    const handleViewModal=(itemData)=>{
      setShowViewModal(true)
      setViewData(itemData)
    }
    
    useEffect(() => {
          dispatch(getAllOrders())
      }, [])

        
    return (
        <>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-4">
          <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                Manage Orders 
              </h3>
              <p className="text-gray-600 text-sm mt-2">
              This page is for handle orders
              </p>
            </div>
         
          </div>
          <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Order No.</th>
                  <th className="py-3 px-3">Name </th>
                  <th className="py-3 px-3">Total Amount </th>
                  <th className="py-3 px-3">Time </th>
                  <th className="py-3 px-3">Order Type </th>
                  <th className="py-3 px-3">Payment Method </th>
                  <th className="py-3 px-3">Order Status</th>
                  <th className="py-3 px-3">Actions</th>
                
                  
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
              {isLoading ? (
              <tr>
              <td colSpan="8" className="text-center px-6 py-8">
                <Stack spacing={4}>
                  <Skeleton variant="rounded" height={30} />
                  <Skeleton variant="rounded" height={25}/>
                  <Skeleton variant="rounded" height={20}/>
                  <Skeleton variant="rounded" height={20}/>
                  <Skeleton variant="rounded" height={20}/>
                </Stack>
              </td>
            </tr>
            ) : (
              Array.isArray(orderData) && orderData.length > 0 && orderData.slice().reverse().map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{item?.count}</td>
                      <td className="px-3 py-4 whitespace-nowrap ">
                        {item?.orderBy?.firstName} {item?.orderBy?.lastName}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap font-semibold ">
                      £ {Number(item?.totalAmount?.total) + Number(item?.totalAmount?.deliveryCharge)}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap ">
                        {item?.time}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap ">
                      <span className={`rounded-md py-1 px-3 font-semibold capitalize`}>{item?.orderType}</span>
                       
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap ">
                      {item?.paymentMethode === 'card' ? <MdCreditCard className="inline-block size-7 text-emerald-600" /> : 
                      <AiFillPoundCircle className="inline-block size-7 text-yellow-600" />}
                      <span className={`rounded-md py-1 px-3 font-bold capitalize ${item?.paymentMethode === 'card' ? "text-emerald-600" : "text-yellow-600" }`}>{item?.paymentMethode}</span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap ">
                      <span className={`rounded-md text-white py-1 px-3 font-semibold ${item?.orderStatus === 'Pending'? "bg-yellow-600" : 
                        item?.orderStatus === 'Completed' ? "bg-emerald-600" :"bg-red-600" }`}>{item?.orderStatus}</span>
                      
                      </td>
                  
                 
                      
                     
                      <td className=" whitespace-nowrap">
                      <button
                          onClick={() => {
                            handleViewModal(item)
                          }}
                          className="py-2 leading-none px-6 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          View
                        </button>
                        {/* <a
                          onClick={() => {
                            navigate(`/updatePizza/${item?._id}`, { state: item  });
                          }}
                          className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Edit
                        </a>
                        <button
                          onClick={() => {
                            handleModal(item?._id);
                          }}
                          className="py-2 leading-none px-3 font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Delete
                        </button> */}
                      </td>
                    </tr>
                  ))
                
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showViewModal && (
        <OrderViewModal setModal={setShowViewModal} viewData={viewData} />
      )}
        {/* {showDeleteModal && (
          <Delete setModal={setShowDeleteModal} handleDelete={handleDelete} />
        )} */}
      </>
    )
}



export default Order

