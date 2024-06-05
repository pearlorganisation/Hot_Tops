import React from "react";

const PizzaCustomizationForm = () => {
  return (
    <div className="categoryCustomizationFormContainer border border-red-500 p-5">
      <div className="sizeContainer flex flex-col">
        <h3 className="text-red-500 font-bold tracking-widest text-lg">
          Size :
        </h3>
        <div className="p-2 grid grid-cols-[20%80%] gap-2">
          <div className="sizeCreationForm border flex flex-col items-center p-4 border-gray-300 rounded-lg gap-3">
            <div className="w-[100%]">
              <input
                placeholder="Size Name"
                className="bg-gray-300 rounded-md p-1 placeholder:text-black w-[100%]"
              />
            </div>
            <div className="w-[100%]">
              <input
                placeholder="Measurement"
                className="bg-gray-300 rounded-md p-1 placeholder:text-black w-[100%]"
              />
            </div>
            <div className="w-[100%]">
              <input
                placeholder="Price"
                className="bg-gray-300 rounded-md p-1 placeholder:text-black w-[100%]"
              />
            </div>
            <div className="sizeCreationBtn w-[100%] text-center">
              <button className="font-bold w-[70%] tracking-widest border p-1 rounded-xl bg-green-400 overflow-hidden">
                Create Size
              </button>
            </div>
          </div>
          <div className="sizeList border"></div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomizationForm;
