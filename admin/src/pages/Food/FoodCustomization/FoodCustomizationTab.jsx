// ----------------------------------------------Imports------------------------------------------
import React from "react";
import { BiDrink, BiSolidPizza } from "react-icons/bi";
// -----------------------------------------------------------------------------------------------

const FoodCustomizationTab = () => {
  // ----------------------------------------------States------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // ----------------------------------------------Hooks------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // --------------------------------------------Functions------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // --------------------------------------------useEffect------------------------------------------
  // -----------------------------------------------------------------------------------------------
  const categoryTabs = [
    {
      title: "Pizza",
      icon: <BiSolidPizza size={40} className="text-red-500 " />,
    },
    {
      title: "Drinks",
      icon: <BiDrink size={40} className="text-red-500" />,
    },
  ];
  // -----------------------------------------------------------------------------------------------
  return (
    <div className="categoryTabsContainer flex p-3 gap-4">
      {Array.isArray(categoryTabs) &&
        categoryTabs.length > 0 &&
        categoryTabs.map((tab) => {
          return (
            <div className="tabCard flex flex-col items-center p-1 cursor-pointer">
              <div className="tabIcon flex justify-center items-center w-[50px] h-[50px] rounded-full border border-red-500">
                {tab.icon}
              </div>
              <div className="tabContent text-red-500">{tab.title}</div>
            </div>
          );
        })}
    </div>
  );
};
export default FoodCustomizationTab;
