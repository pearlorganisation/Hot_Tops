import React, { useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import SizeAndBasesModal from "../../../../../../components/FoodCustomizationDialog/SizeAndBasesModal";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteSizePizza } from "../../../../../../features/actions/pizza/deleteCustomization/deleteSizePizza";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import EditItem from "../../../../../../components/FoodCustomizationDialog/EditItemModel/EditItem";



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
          <h3 className="text-red-500 font-bold tracking-widest text-lg">Size :</h3>
          <div>
            <IoMdAddCircleOutline size={30} className="cursor-pointer" onClick={handleModalOpen} />
          </div>
        </div>
        <div className="p-2">
          <div className="sizeList p-3 border shadow-md bg-white border-gray-400 rounded-lg h-[400px]">
            <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-2">
              <thead className="hidden border-b lg:table-header-group"  >
                <tr>
                  <th className="border-b-2 p-2 text-left">Name</th>
                  <th className="border-b-2 p-2 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {size?.map((item) => (
                  <tr key={item?._id}>
                    <td className="p-2">{item?.name}</td>
                    <td className="p-2">${item?.price}</td>

                    <td className="flex justify-center items-center gap-4">
                    <p className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white" onClick={()=>handleEditItem(item)}>
                        Edit
                      </p>
                      <p className="hover:bg-red-500 object-cover" >
                      <RiDeleteBin5Line size={34} onClick={()=>{handleDeleteItem(item?._id)}}/>
                      </p>
                    
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
