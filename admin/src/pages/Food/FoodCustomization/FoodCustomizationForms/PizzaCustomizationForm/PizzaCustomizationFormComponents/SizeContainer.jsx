import React, { useRef, useState } from "react";
import SizeAndBasesModal from "../../../../../../components/FoodCustomizationDialog/SizeAndBasesModal";
import { useDispatch, useSelector } from "react-redux";
import EditItem from "../../../../../../components/FoodCustomizationDialog/EditItemModel/EditItem";
import { deleteSizePizza } from "../../../../../../features/actions/pizza/deleteCustomization";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";



const SizeContainer = () => {



  const {size} = useSelector((state)=>state?.pizza);
  const [editItemData , setEditData] = useState({});

  const modalRef = useRef();
  const editRef = useRef();
  
  const dispatch = useDispatch();
  
  
  function handleDeleteItem(id)
  {
    dispatch(deleteSizePizza(id));
  }

  function handleEditItem(data) {
    editRef.current.open();
    setEditData(data);
  }

  function handleModalOpen() {
    modalRef.current.open();
  }

  return (
    <>
      <SizeAndBasesModal ref={modalRef} itemName="Size" />
      <EditItem itemName={"Size"}ref={editRef} data = {editItemData} />
      <div className="sizeContainer flex flex-col">
        <div className="flex justify-between p-2">
          <h3 className="font-semibold  tracking-wide border rounded-md px-2 bg-red-500 text-white text-lg">SIZE</h3>
          <div>
          <IoAddCircleSharp size={32} className=" cursor-pointer  hover:bg-slate-600 bg-slate-700 rounded-lg text-white " />
          </div>
        </div>
        <div className="p-2">
          <div className=" text-slate-700 sizeList p-3 border shadow-md bg-white border-gray-400 rounded-lg h-[400px] overflow-auto">
            <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-2">
              <thead className="hidden border-b lg:table-header-group"  >
                <tr>
                  <th className="border-b-2 p-2 text-left">Name</th>
                  <th className="border-b-2 p-2 text-left">Price</th>
                  <th className="border-b-2 p-2 ">Actions</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {size?.map((item) => (
                  <tr key={item?._id}>
                    <td className="p-2">{item?.name}</td>
                    <td className="p-2">£ {item?.price}</td>

                    <td className="flex justify-center items-center gap-4">
                    <button
                          className="inline-flex items-center rounded-lg font-medium text-white bg-green-800 hover:bg-green-700
                           px-2 py-1 text-sm "
                          onClick={()=>handleEditItem(item)}
                        >
                         <RiEditCircleFill size={28}/>
                        </button>
                        <button className="bg-red-700 hover:bg-red-600 rounded-lg text-white px-2 py-1  object-cover">
                          <MdDelete
                            size={28}
                            onClick={() => handleDeleteItem(item?._id)}
                          />
                        </button>
                    
                    </td>
                  </tr>
                ))}

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeContainer;
