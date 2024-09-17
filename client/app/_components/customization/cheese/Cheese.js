"use client";
import { setPrice, setToppings } from "@/app/lib/features/cartSlice/cartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Cheese = ({ cheeseData }) => {
  // console.log(cheeseData, "cheeseData");
  const { customizationData, MAX_TOPPINGS } = useSelector(
    (state) => state.orderDetails
  );

  const [defaultCheeseDetails, setDefaultCheeseDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultSelectedCheeses = customizationData?.cheeseName;

  useEffect(() => {
    setDefaultCheeseDetails(customizationData?.cheeseName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedChees(() => {
      const defaultSelected = {};
      console.log(defaultSelectedCheeses, "defaultSelectedSauces");
      defaultCheeseDetails?.forEach((cheeseName) => {
        // console.log(cheeseName, "cheeseName");
        const cheese = cheeseData.find((s) => s.name === cheeseName);
        // console.log(cheeseData, "cheeseData");
        if (cheese) {
          defaultSelected[cheese._id] = "single";
        }
      });
      // console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultCheeseDetails, customizationData, cheeseData]);

  const [selectedCheese, setSelectedChees] = useState({});

  const handleSelectionChange = (cheeseId, size) => {
    setSelectedChees((prevSelected) => {
      // Toggle the selection
      if (prevSelected[cheeseId] === size) {
        const { [cheeseId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return {
          ...prevSelected,
          [cheeseId]: size,
        };
      }
    });
  };

  useEffect(() => {
    console.log(selectedCheese, "selectedCheese");
  }, [selectedCheese]);

  const handleSave = () => {
    const selectedCheeseData = Object.entries(selectedCheese).map(
      ([cheeseId, size]) => {
        const cheese = cheeseData.find((s) => s._id === cheeseId);
        const price =
          size === "single"
            ? cheese?.price[0]?.singlePrice
            : cheese?.price[0]?.doublePrice;
        return {
          cheeseName: cheese.name,
          _id: cheese?._id,
          size,
          price,
        };
      }
    );
    dispatch(setToppings({ cheese: selectedCheeseData }));
    // console.log(selectedCheeseData, "selectedCheeseData");
  };

  useEffect(() => {
    handleSave();
  }, [selectedCheese]);

  return (
    <div className="">
      <h1 className="text-lg font-bold my-10">CHEESES <span className="text-gray-500 font-normal">(You can deselect the cheese if not required)</span></h1>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Cheese
            </th>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Single
            </th>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Double
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cheeseData.map((cheese) => (
            <tr key={cheese._id} className="hover:bg-gray-100">
              <td className="px-2 md:px-6 py-2 md:py-4 whitespace-wrap text-sm font-medium text-gray-900">
                {cheese.name}
              </td>
              <td className="px-2 md:px-4 py-2 md:py-4 whitespace-wrap text-sm font-medium text-gray-900">
                <div
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded text-center ${
                    selectedCheese[cheese._id] === "single"
                      ? "bg-red-800 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(cheese._id, "single")}
                >
                  £ {cheese?.price[0]?.singlePrice}
                </div>
              </td>
              <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded text-center ${
                    selectedCheese[cheese._id] === "double"
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(cheese._id, "double")}
                >
                  £ {cheese?.price[0]?.doublePrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cheese;
