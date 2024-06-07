import React, { useState } from "react";
import SelectStoreModal from "../../Modals/SelectStoreModal";

import { useDispatch } from "react-redux";

import PizzaCards from "./pizzaCards/PizzaCards";

const Pizzas = () => {
  // -------------------------------------------useState--------------------------------------------
  const [selectedType, setSelectedType] = useState("All");
  const [isStorePopUpVisible, setIsStorePopUpVisible] = useState(false);

  // ---------------------------------dummyData------------------------------------------------------
  const dummyData = {
    filter: ["All", "Hot", "BBQ", "Garlic", "Tomato"],
    categories: ["Meat", "vegetarian"],
    price: [
      {
        name: "supersize",
        price: "1050",
      },
      {
        name: "large",
        price: "750",
      },
      {
        name: "medium",
        price: "450",
      },
      {
        name: "small",
        price: "350",
      },
    ],
    categoryData: [
      {
        category: "Meat",
        type: "Hot",
        Name: "Hawaiian",
        img: "https://topspizza.co.uk/storage/6.jpg",
      },
      {
        category: "Meat",
        type: "BBQ",
        Name: "BBQ chicken",
        img: "https://topspizza.co.uk/storage/8.jpg",
      },
      {
        category: "vegetarian",
        type: "Garlic",
        Name: "Aloo gobhi",
        img: "https://topspizza.co.uk/storage/4.jpg",
      },
      {
        category: "vegetarian",
        type: "Hot",
        Name: "vegi hot",
        img: "https://topspizza.co.uk/storage/9.jpg",
      },
    ],
  };

  return (
    <div className="my-4">
      <div>
        <div className="flex gap-2 mx-4 md:mx-8 my-4 flex-wrap ">
          <span className="font-bold">filter:</span>
          {dummyData?.filter?.map((data) => (
            <div className="flex gap-2" key={data}>
              <input
                type="radio"
                name="type"
                value={data}
                id={data}
                defaultChecked={data === "All"}
                onClick={() => setSelectedType(data)}
              />
              <label htmlFor={data}>{data}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        {dummyData?.categories?.map((category) => {
          const isCategoryMatched = dummyData.categoryData.some(
            (data) =>
              data.category === category &&
              (selectedType === data.type || selectedType === "All")
          );
          return (
            <React.Fragment key={category}>
              {isCategoryMatched && (
                <div class="flex items-center justify-center mb-2 p-5">
                  <div class="flex-grow border-t border-red-500"></div>
                  <h1 class="px-4 text-red-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {category}
                  </h1>
                  <div class="flex-grow border-t border-red-500 "></div>
                </div>
              )}

              <div className="flex gap-4 flex-wrap justify-center">
                {dummyData?.categoryData?.map((data, idx) => {
                  if (
                    data?.category === category &&
                    (selectedType === data?.type || selectedType === "All")
                  ) {
                    return (
                      <PizzaCards data={data} dummyData={dummyData} idx={idx} />
                    );
                  }
                  return null;
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Pizzas;
