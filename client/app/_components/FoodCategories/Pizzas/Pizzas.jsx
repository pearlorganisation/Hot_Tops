import React, { useState } from "react";

const Pizzas = () => {
  const [seletedType, setSelectedType] = useState("All");

  const dummyData = {
    filter: ["All", "Hot", "BBQ", "Garlic", "Tomato"],
    categoryData: [
      {
        category: "Meat",
        type: "Hot",
        Name: "Hawaiian",
        img: "/src",
      },
      {
        category: "Meat",
        type: "BBQ",
        Name: "BBQ chicken",
        img: "/src",
      },
      {
        category: "vegetarian",
        type: "Garlic",
        Name: "Aloo gobhi",
        img: "/src",
      },
      {
        category: "vegetarian",
        type: "Hot",
        Name: "vegi hot",
        img: "/src",
      },
    ],
  };

  return (
    <div>
      <div>
        <div className="flex gap-2 mx-4">
          filter:
          {dummyData?.filter?.map((data) => {
            return (
              <>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="type"
                    value={data}
                    id={data}
                    onClick={() => setSelectedType(data)}
                  />
                  <label for={data}>{data}</label>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {dummyData?.categoryData?.map((data) => {
        if (seletedType === data?.type) {
          return <div className="bg-gray-200 my-2">{data?.Name}</div>;
        } else if (seletedType === "All") {
          return <div className="bg-gray-200 my-2">{data?.Name}</div>;
        }
      })}
    </div>
  );
};

export default Pizzas;
