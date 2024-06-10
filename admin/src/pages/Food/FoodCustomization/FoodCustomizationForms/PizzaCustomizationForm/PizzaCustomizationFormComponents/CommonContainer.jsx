import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRef } from "react";
import FoodModal from "../../../../../../components/FoodCustomizationDialog/FoodModal";

const CommonContainer = ({ itemName }) => {

  const modalRef = useRef();
  function handleModalOpen()
  {
    modalRef.current.open();
  }
  






  return (
    
    <>

    <FoodModal  ref={modalRef} itemName={itemName}/>
    <div className="sizeContainer flex flex-col">
      <div className="flex p-2 justify-between">
        <h3 className="text-red-500 font-bold tracking-widest text-lg">
          {itemName} :
        </h3>
        <div className="border-green-400 border" onClick={handleModalOpen}>
          <IoMdAddCircleOutline size={30} className="cursor-pointer "  />
        </div>
      </div>
      <div className="p-2 gap-2">
        <div className="list p-3 border bg-white shadow-md border-gray-400 rounded-lg"></div>
      </div>
    </div>
    </>
    
  );
};

export default CommonContainer;
