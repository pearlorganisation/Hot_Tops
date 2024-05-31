import React, { useState } from "react";

const Desserts = () => {
  // -------------------------------------------useState--------------------------------------------
  const [selectedType, setSelectedType] = useState("All");

  // ---------------------------------dummyData------------------------------------------------------
  const dummyData = {
    filter: ["All", "CAKE & COOKIES", "ICECREAM"],
    categories: ["CAKE & COOKIES", "ICECREAM"],
    categoryData: [
      {
        category: "CAKE & COOKIES",
        type: "CAKE & COOKIES",
        Name: "Banoffi Cream Pie",
        img: "https://topspizza.co.uk/storage/56.jpg",
      },
      {
        category: "CAKE & COOKIES",
        type: "CAKE & COOKIES",
        Name: "Warm Cookies",
        img: "https://topspizza.co.uk/storage/163.jpg",
      },
      {
        category: "CAKE & COOKIES",
        type: "CAKE & COOKIES",
        Name: "Banoffi Cream Pie",
        img: "https://topspizza.co.uk/storage/56.jpg",
      },
      {
        category: "CAKE & COOKIES",
        type: "CAKE & COOKIES",
        Name: "Chocolate Fudge Cake",
        img: "https://topspizza.co.uk/storage/57.jpg",
      },
      {
        category: "ICECREAM",
        type: "ICECREAM",
        Name: "Warm Chocolate Brownies",
        img: "https://topspizza.co.uk/storage/198.jpg",
      },
      {
        category: "ICECREAM",
        type: "ICECREAM",
        Name: "vegi hot",
        img: "https://topspizza.co.uk/storage/191.png",
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
          // console.log(selectedType === data.type);
          const isCategoryMatched = dummyData.categoryData.some(
            (data) =>
              data.category === category &&
              (selectedType === data.type || selectedType === "All")
          );
          console.log(isCategoryMatched);
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
                              <p className="text-center p-2 text-white">
                                Select store to order
                              </p>
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

export default Desserts;
