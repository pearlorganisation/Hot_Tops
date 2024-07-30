import React from 'react'
import { format } from 'date-fns';



export default function OrderViewModal ({viewData,setModal}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd-MM-yy , hh:mm a');
      };


  return (
    <div
    className="fixed top-0 left-0 z-1000 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdroap-blur-sm"
    aria-labelledby="header-3a content-3a"
    aria-modal="true"
    tabindex="-1"
    role="dialog"
  >
    {/*    <!-- Modal --> */}
    <div
      className="flex w-[80%] sm:w-[70%] h-full  flex-col gap-6  rounded bg-white p-6 pb-14 shadow-xl "
      id="modal"
      role="document"
    >
      {/*        <!-- Modal header --> */}
      <header id="header-3a" className="flex items-center gap-4">
        <h3 className="flex-1 text-xl font-medium text-slate-700">
        Order Details
        </h3>
        <div>Order created at :    {formatDate(viewData?.createdAt)} </div>
        <button
          onClick={() => setModal(false)}
          className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
          aria-label="close dialog"
        >
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-79 desc-79"
            >
              <title id="title-79">Icon title</title>
              <desc id="desc-79">
                A more detailed description of the icon
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </header>
      {/*        <!-- Modal body --> */}
      <div id="content-3a" className="flex-1 overflow-auto space-y-10">

      <table className="w-full table-auto text-sm">
    <tbody className="text-gray-600">
      <tr>
        <td className="py-2 px-4 border border-gray-300">Full name</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? `${viewData?.orderBy?.firstName} ${viewData?.orderBy?.lastName}` : ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Items </td>
        <td className="py-2 px-4 border border-gray-300">
          {viewData && viewData.items ? (
            viewData.items.map((item, idx) => (
              <div className='border border-slate-300 flex mb-2 rounded-md px-2 gap-2' key={idx}>
                 <div className='flex items-center '><span className=''>{idx+1} :</span> </div>
                 <div className='p-2 space-x-2'>
              <span className='bg-slate-100 mb-2 rounded-md px-2 '>{item?.name} {item?.size}</span>
             
           
              </div>
              </div>
            ))
          ) : (
            'No Price available'
          )}
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Total amount</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold"> {viewData ? 
         <span className='bg-slate-100 mb-2 rounded-md px-2 '> £ {Number(viewData?.totalAmount?.total) + Number(viewData?.totalAmount?.deliveryCharge)}</span>: 'No data'}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Day & Time</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 '>{viewData?.time} </span> : 'No data'}
          
        </td>
        </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Order Type</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 capitalize'>{viewData?.orderType} </span> : 'No data'}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Payment method</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 capitalize'>{viewData?.paymentMethode} </span> : 'No data'}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Order Status</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 '>{viewData?.orderStatus} </span> : 'No data'}
          
        </td>
      </tr>
     
      <tr>
        <td className="py-2 px-4 border  border-gray-300">Delivery Address</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 capitalize'>{viewData?.address} </span> : 'No data'}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-b-1 border-gray-300">Mobile Number</td>
        <td className="py-2 px-4 border border-gray-300 font-semibold">
        
        {viewData ?  <span className='bg-slate-100 mb-2 rounded-md px-2 capitalize'>{viewData?.orderBy?.mobileNumber} </span> : 'No data'}
          
        </td>
      </tr>
      
 

      

      
    </tbody>
  </table>
      </div>

</div>
</div>
  )
}
