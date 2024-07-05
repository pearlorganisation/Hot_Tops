import React, { useState } from "react";
import useSWR from "swr";

import { useDispatch, useSelector } from "react-redux";

import SidesCards from "./SidesCards/SidesCards";

// -------------------data fetching function-----------------------
const pizzaFetcher = (...args) => fetch(...args).then((res) => res.json());

const Sides = () => {
  // -------------------------------------------useState--------------------------------------------
  const [selectedType, setSelectedType] = useState("All");
  const [isStorePopUpVisible, setIsStorePopUpVisible] = useState(false);

  // =-------------------------data fetching---------------------------

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sides`,
    pizzaFetcher
  );

  // ---------------fetch filter---------------------------
  const {
    data: filterData,
    error: filterError,
    isLoading: filterLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sides/filter`,
    pizzaFetcher
  );

  // -----------------category fetcher------------------------------------------
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sides/category`,
    pizzaFetcher
  );

  const categories = [];
  categoryData &&
    categoryData?.data?.map((data) => categories.push(data?.category));
  // ---------------------------------dummyData------------------------------------------------------
  const dummyData = {
    // =-------------------------data fetching---------------------------
    filter: ["All", "Hot", "BBQ", "Garlic", "Tomato"],
    categories,
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
  console.log(categories);

  if (error || filterError) return <div>failed to load</div>;
  if (isLoading || filterLoading) return <div>....loading</div>;
  console.log(data);
  return (
    <div className="my-4">
      <div>
        <div className="flex gap-2 mx-4 md:mx-8 my-4 flex-wrap ">
          <span className="font-bold">filter:</span>
          {filterData?.data?.map((data) => (
            <div className="flex gap-2" key={data}>
              <input
                type="radio"
                name="type"
                value={data?.filter}
                id={data?.filter}
                defaultChecked={data?.filter === "All"}
                onClick={() => setSelectedType(data?.filter)}
              />
              <label htmlFor={data?.filter}>{data?.filter}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        {categories &&
          categories.map((category) => {
            const isCategoryMatched = data?.data?.some(
              (data) =>
                data.category?.category === category &&
                (selectedType === data?.filter?.filter ||
                  selectedType === "All")
            );
            return (
              <React.Fragment key={category}>
                {isCategoryMatched && (
                  <div class="flex items-center justify-center mb-2 p-5">
                    <div class="flex-grow border-t border-red-800"></div>
                    <h1 class="px-4 text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      {category}
                    </h1>
                    <div class="flex-grow border-t border-red-800 "></div>
                  </div>
                )}

                <div className="flex gap-4 flex-wrap justify-center">
                  {data?.data &&
                    data?.data.map((data, idx) => {
                      if (
                        data?.category?.category === category &&
                        (selectedType === data?.filter?.filter ||
                          selectedType === "All")
                      ) {
                        return (
                          <SidesCards
                            data={data}
                            dummyData={dummyData}
                            idx={idx}
                          />
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

export default Sides;
