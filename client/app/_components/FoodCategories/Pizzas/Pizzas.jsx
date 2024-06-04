import React, { useState } from "react";
import SelectStoreModal from "../../Modals/SelectStoreModal";

const Pizzas = () => {
  // -------------------------------------------useState--------------------------------------------
  const [selectedType, setSelectedType] = useState("All");
  const [isStorePopUpVisible, setIsStorePopUpVisible] = useState(false);

  // ---------------------------------dummyData------------------------------------------------------
  const dummyData = {
    filter: ["All", "Hot", "BBQ", "Garlic", "Tomato"],
    categories: ["Meat", "vegetarian"],
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
                <div class="flex items-center justify-center mb-2">
                  <div class="flex-grow border-t border-red-500"></div>
                  <h1 class="px-4 text-red-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {category}
                  </h1>
                  <div class="flex-grow border-t border-red-500"></div>
                </div>
              )}
              <div className="flex gap-4 flex-wrap justify-center">
                {dummyData?.categoryData?.map((data, idx) => {
                  if (
                    data?.category === category &&
                    (selectedType === data?.type || selectedType === "All")
                  ) {
                    return (
                      <div
                        className=" p-3 bg-white shadow-md rounded-lg max-w-[15rem] 2xl:max-w-xs w-full newshadow"
                        key={idx}
                      >
                        <img
                          src={data.img}
                          alt="Card Image"
                          className="rounded-t-lg w-full object-cover"
                        />
                        <div className="p-4">
                          <h2 className="text-xl font-semibold mb-4">
                            {data?.Name}
                          </h2>
                          <div className="relative">
                            <div className="bg-green-600">
                              <button
                                onClick={() => setIsStorePopUpVisible(true)}
                                data-modal-target="popup-modal"
                                data-modal-toggle="popup-modal"
                                data-modal-hide="popup-modal"
                                className="text-center p-2 text-white"
                                type="button"
                              >
                                Select store to order
                              </button>
                              <SelectStoreModal
                                isStorePopUpVisible={isStorePopUpVisible}
                                setIsStorePopUpVisible={setIsStorePopUpVisible}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
