import React from "react";
import useSWR from "swr";

const Drinks = () => {
  // -------------------data fetching function-----------------------
  const drinksFetcher = async (...args) =>
    fetch(...args).then((res) => {
      return res.json();
    });

  // =-------------------------data fetching---------------------------
  const {
    data: drinksData,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/drinks`,
    drinksFetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {drinksData?.data.map((item) => (
          <div
            class="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-3"
            key={item?._id}
          >
            <img
              src={item?.banner}
              alt="Card Image"
              className="rounded-t-lg  object-cover w-[370px] h-[250px]"
            />

            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4 ">{item?.drink}</h2>
              <div class="relative flex flex-col gap-4">
                <p>
                  <select
                    name=""
                    className="w-full border-2 rounded-l-lg p-3"
                    style={{
                      boxShadow:
                        " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
                    }}
                  >
                    {item?.price.map((drink) => (
                      <option
                        key={drink._id}
                        value={drink?.drinkType || "price"}
                      >
                        {drink?.drinkType} £<span>{drink.price} </span>
                      </option>
                    ))}
                  </select>
                </p>
                <div className="bg-green-600 hover:bg-green-500 cursor-pointer ">
                  <p className="text-center p-2 text-white">Add</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Drinks;
