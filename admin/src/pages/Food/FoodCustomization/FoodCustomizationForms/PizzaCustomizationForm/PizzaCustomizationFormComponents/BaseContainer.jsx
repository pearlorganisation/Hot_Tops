import React, { useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import SizeAndBasesModal from "../../../../../../components/FoodCustomizationDialog/SizeAndBasesModal";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteBasePizza } from "../../../../../../features/actions/pizza/deleteCustomization/deleteBasePizza";
import EditItem from "../../../../../../components/FoodCustomizationDialog/EditItemModel/EditItem";

const BaseContainer = () => {
  const { base } = useSelector((state) => state.pizza);
  const [editItemData,setEditData] = useState({});
  const modalRef = useRef();
  const editRef = useRef();

  const dispatch = useDispatch();
  function handleModalOpen() {
    modalRef.current.open();
  }

  function handleEditItem(data) {
    editRef.current.open();
    setEditData(data);
  }

  function handleDeleteItem(id) {
    dispatch(deleteBasePizza(id));
  }

  return (
    <>
      <SizeAndBasesModal ref={modalRef} itemName="Base" />
      <EditItem ref={editRef} data = {editItemData} itemName="Base"/>
      <div className="baseContainer flex flex-col">
        <div className="flex p-2 justify-between">
          <h3 className="text-red-500 font-bold tracking-widest text-lg">
            Base :
          </h3>
          <div onClick={handleModalOpen}>
            <IoMdAddCircleOutline size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="p-2">
          <div className="baseList p-3 bg-white border shadow-md border-gray-400 rounded-lg h-[400px]">
            <table className="min-w-full  border-separate border-spacing-x-2 border-spacing-y-2">
              <thead className="hidden border-b lg:table-header-group" >
                <tr>
                  <th className="border-b-2 p-2 text-left">Name</th>
                  <th className="border-b-2 p-2 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(base) &&
                  base?.map((item) => (
                    <tr key={item?._id}>
                      <td className="p-2">{item?.name}</td>
                      <td className="p-2">${item?.price}</td>

                      <td className="flex justify-center items-center gap-4">
                        <p
                          className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white"
                          onClick={()=>handleEditItem(item)}
                        >
                          Edit
                        </p>
                        <p className="hover:bg-red-500 object-cover">
                          <RiDeleteBin5Line
                            size={34}
                            onClick={() => handleDeleteItem(item?._id)}
                          />
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

export default BaseContainer;
