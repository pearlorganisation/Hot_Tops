// -------------------------------------------------Imports-----------------------------------------
import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
// -------------------------------------------------------------------------------------------------

const DropDown = ({ sideBarOption }) => {
  // -------------------------------------------------States-----------------------------------------
  const [dropDown, setDropDown] = useState(false);
  // -------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="px-3 cursor-pointer">
        <div
          onClick={() => {
            setDropDown((prevState) => !prevState);
          }}
          to={sideBarOption?.path}
          className="flex items-center gap-3 rounded p-3  transition-colors hover:bg-red-800 hover:font-bold focus:text-black  text-white focus:font-bold  aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
        >
          <div className="flex items-center self-center">
            {sideBarOption?.icon}
          </div>
          <div className="flex    w-full flex-1 flex-col  items-start justify-center gap-0 overflow-hidden truncate text-sm">
            {sideBarOption?.label}
          </div>
        </div>

        {dropDown && (
          <div className="m-2 flex  border-r-green-400 justify-end items-center">
            <div
              id="dropdownDivider"
              class="z-10  bg-red-800 divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm font-bold text-white "
                aria-labelledby="dropdownDividerButton"
              >
                {sideBarOption.subItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        class="block px-4 py-2 hover:text-red-400 dark:hover:bg-gray-600 "
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(DropDown);
