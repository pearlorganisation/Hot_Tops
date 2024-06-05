import React from "react";

const BaseContainer = () => {
  return (
    <div className="baseContainer flex flex-col">
      <h3 className="text-red-500 font-bold tracking-widest text-lg">Base :</h3>
      <div className="p-2 grid grid-cols-[20%80%] gap-2">
        <div className="baseCreationForm border bg-white  flex flex-col items-center p-4 border-gray-400 rounded-lg gap-3 shadow-md">
          <div className="w-[100%]">
            <input
              type="text"
              placeholder="Base Name"
              className="bg-gray-100 rounded-md p-1 placeholder:text-black w-[100%]"
            />
          </div>
          <div className="w-[100%]">
            <input
              type="number"
              placeholder="Price"
              className="bg-gray-100 rounded-md p-1 placeholder:text-black w-[100%]"
            />
          </div>
          <div className="baseCreationBtn w-[100%] text-center">
            <button
              className="font-bold w-[70%] tracking-widest border p-1 rounded-xl bg-green-400 overflow-hidden"
              type="submit"
            >
              Create Base
            </button>
          </div>
        </div>
        <div className="baseList bg-white border shadow-md border-gray-400 rounded-lg"></div>
      </div>
    </div>
  );
};

export default BaseContainer;
