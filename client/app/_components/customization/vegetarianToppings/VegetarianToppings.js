"use client";
import { setPrice, setToppings } from "@/app/lib/features/cartSlice/cartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const VegetarianToppings = ({ vegetarianTopData }) => {
  // console.log(vegetarianTopData, "vegetarianTopData");
  const { customizationData } = useSelector((state) => state.orderDetails);
  const [defaultVegDetails, setDefaultVegDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultSelectedVeg = customizationData?.vegetarianToppingsName;

  useEffect(() => {
    setDefaultVegDetails(customizationData?.vegetarianToppingsName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedVeg(() => {
      const defaultSelected = {};
      // console.log(defaultSelectedVeg, "defaultSelectedVeg");
      defaultVegDetails?.forEach((vegName) => {
        // console.log(vegName, "vegName");
        const veg = vegetarianTopData.find((s) => s.name === vegName);
        // console.log(vegetarianTopData, "vegetarianTopData");
        if (veg) {
          defaultSelected[veg._id] = "single";
        }
      });
      // console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultVegDetails, customizationData, vegetarianTopData]);

  const [selectedVeg, setSelectedVeg] = useState({});

  const handleSelectionChange = (vegId, size) => {
    setSelectedVeg((prevSelected) => {
      // Toggle the selection
      if (prevSelected[vegId] === size) {
        const { [vegId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return {
          ...prevSelected,
          [vegId]: size,
        };
      }
    });
  };

  useEffect(() => {
    // console.log(selectedVeg, "selectedVeg");
  }, [selectedVeg]);

  const handleSave = () => {
    const selectedVegetarianData = Object.entries(selectedVeg).map(
      ([vegId, size]) => {
        const veg = vegetarianTopData.find((s) => s._id === vegId);
        const price =
          size === "single"
            ? veg.price[0].singlePrice
            : veg.price[0].doublePrice;
        return {
          vegName: veg.name,
          size,
          price,
        };
      }
    );
    dispatch(setToppings({ veg: selectedVegetarianData }));
    // console.log(selectedVegetarianData, "selectedVegetarianData");
  };

  useEffect(() => {
    handleSave();
  }, [selectedVeg]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Select Your Vegetarian Toppings
      </h1>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sauce
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Single
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Double
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vegetarianTopData.map((veg) => (
            <tr key={veg._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {veg.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedVeg[veg._id] === "single"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(veg._id, "single")}
                >
                  £{veg.price[0].singlePrice}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedVeg[veg._id] === "double"
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(veg._id, "double")}
                >
                  £{veg.price[0].doublePrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VegetarianToppings;
