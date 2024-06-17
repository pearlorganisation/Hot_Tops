import React, { useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import FoodModal from "../../../../../../components/FoodCustomizationDialog/FoodModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBasePizza } from "../../../../../../features/actions/pizza/deleteCustomization/deleteBasePizza";
import { deleteSaucePizza } from "../../../../../../features/actions/pizza/deleteCustomization/deleteSaucePizza";
import { deleteCheesePizza } from "../../../../../../features/actions/pizza/deleteCustomization/deleteCheesePizza";
import { deleteMeatTopping } from "../../../../../../features/actions/pizza/deleteCustomization/deleteMeatTopping";
import { deleteVegTopping } from "../../../../../../features/actions/pizza/deleteCustomization/deleteVegTopping";
import EditItem from "../../../../../../components/FoodCustomizationDialog/EditItemModel/EditItem";

const CommonContainer = ({ itemName, items }) => {


 const dispatch = useDispatch();


 const [editItemData , setEditItem] = useState();


  const modalRef = useRef();
  const editItemRef = useRef();

  function handleEditItem(data)
  {
    setEditItem(data)
    editItemRef.current.open();
  }


  function handleModalOpen() {
    modalRef.current.open();
  }

  function handleDeleteItem(id)
  {
    if(itemName === "Sauce")
    {
      dispatch(deleteSaucePizza(id))
    }
    else if(itemName === "Cheese"){
      dispatch(deleteCheesePizza(id))

    }
    else if(itemName === "MEAT TOPPINGS"){
      dispatch(deleteMeatTopping(id))

    }
    else if(itemName === "VEGETARIAN TOPPINGS"){
      dispatch(deleteVegTopping(id))

    }
    
  }


  return (
    <>
      <FoodModal ref={modalRef} itemName={itemName} />
      <EditItem ref={editItemRef} itemName = {itemName} data={editItemData}/>
      <div className="sizeContainer  flex flex-col">
        <div className="flex p-2 justify-between">
          <h3 className="text-red-500 font-bold tracking-widest text-lg">{itemName} :</h3>
          <div className="border-green-400 border" onClick={handleModalOpen}>
            <IoMdAddCircleOutline size={30} className="cursor-pointer " />
          </div>
        </div>
        <div className="p-2 gap-2">
          <div className="list p-3 border md:h-[400px] bg-white shadow-md border-gray-400 rounded-lg">
            <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr>
                <th className="border-b-2 p-2 text-left">Name</th>
                <th className="border-b-2 p-2 text-left">Single </th>
                <th className="border-b-2 p-2 text-left">Double </th>
                  <td className="whitespace-normal py-4 text-sm font-bold text-gray-500 sm:px-6"></td>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <tr key={item?._id}>
                    <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                      {item?.name}
                      <div className="mt-1 lg:hidden">
                        <p className="font-normal text-gray-500">${item?.singlePrice}</p>
                      </div>
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      ${item?.singlePrice}
                    </td>
                    <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                      ${item?.doublePrice}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="flex justify-center items-center gap-4">
                    <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white" onClick={()=>{handleEditItem(item)}}>
                        Edit
                      </div>
                      <div className="hover:bg-red-500 object-cover" >
                      <RiDeleteBin5Line size={34} className="text-black" onClick={()=>handleDeleteItem(item._id)}/>
                      </div>
                    
                    </div>
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

export default CommonContainer;
