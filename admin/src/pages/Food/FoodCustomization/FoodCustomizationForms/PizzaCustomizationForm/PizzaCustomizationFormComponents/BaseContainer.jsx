import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import SizeAndBasesModal from "../../../../../../components/FoodCustomizationDialog/SizeAndBasesModal";
import { useRef } from "react";
const BaseContainer = () => {
  const modalRef = useRef();
  function handleModalOpen() {
   
    modalRef.current.open();

  }
  

  return (
    <>
      <SizeAndBasesModal ref={modalRef} itemName="Base" />
      <div className="baseContainer flex flex-col">
        <div className="flex p-2 justify-between">
          <h3 className="text-red-500 font-bold tracking-widest text-lg">
            Base :
          </h3>
          <div onClick={handleModalOpen}>
            <IoMdAddCircleOutline size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="p-2 gap-2">
          <div className="baseList p-3 bg-white border shadow-md border-gray-400 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default BaseContainer;
