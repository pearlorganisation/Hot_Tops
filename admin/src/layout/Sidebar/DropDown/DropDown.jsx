import React, { useState , memo } from "react";

const DropDown = ({ items }) => {
   const [dropDown ,setDropDown] = useState(false);



  return (
    
    <>
    <div className="px-3">
        
      <div
        onClick={()=>{setDropDown((prevState)=> !prevState)}}
        to={items?.path}
        className="flex items-center gap-3 rounded p-3  transition-colors hover:bg-red-800 hover:font-bold focus:text-black  text-white focus:font-bold  aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
      >
        <div className="flex items-center self-center" >{items?.icon}</div>
        <div  className="flex    w-full flex-1 flex-col  items-start justify-center gap-0 overflow-hidden truncate text-sm">
          {items?.label}
        </div>
      </div>

      {dropDown &&
        <div className="m-2 flex  border-r-green-400 justify-end items-center">
        <div
          id="dropdownDivider"
          class="z-10  bg-red-800 divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-2 text-sm font-bold text-white "
            aria-labelledby="dropdownDividerButton"
          >
            {items.items.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:text-red-400 dark:hover:bg-gray-600 "
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>}
    </div>
    </>
    
  );
};

export default memo(DropDown);
