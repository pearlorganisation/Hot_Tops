"use client";
import React, { useState } from "react";
import useSWR from "swr";

const Product = () => {
  const [cheeseSelections, setCheeseSelections] = useState({});
  const [sauceSelections, setSauceSelections] = useState({});
  const [vegetarianSelections, setVegetarianSelections] = useState({});
  const [meatSelections, setMeatSelections] = useState({});
  const [seafoodSelections, setSeafoodSelections] = useState({});
   


    // -------------------data fetching function-----------------------
    const baseFetcher = async(...args) => fetch(...args).then((res) => {
    return res.json();
    });
    const sizeFetcher = async(...args) => fetch(...args).then((res) => {
      return res.json()
    });
    const sauceFetcher = async(...args) => fetch(...args).then((res) => {
      return res.json()
    });
    const cheeseFetcher = async(...args) => fetch(...args).then((res) => {
      return res.json()
    });
    const vegFetcher = async(...args) => fetch(...args).then((res) => {
      return res.json()
    });
    const meatFetcher = async(...args) => fetch(...args).then((res) => {
      return res.json()
    });

      

    // =-------------------------data fetching---------------------------
    const {data:baseData, error : baseError, isLoading :baseLoading } = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/base`,
      baseFetcher
    );
    const {data:sizeData, error : sizeError, isLoading : sizeLoading } = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/size`,
      sizeFetcher
    );
    const {data:sauceData, error : sauceError, isLoading : sauceLoading} = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/sauce`,
      sauceFetcher
    );
    const {data:cheeseData, error : cheeseError, isLoading : cheeseLoading } = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/cheese`,
      cheeseFetcher
    );
    const {data:vegData, error : vegError, isLoading : vegLoading} = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/vegetarianToppings`,
      vegFetcher
    );
    const {data:meatData, error : meatError, isLoading  : meatLoading} = useSWR(
      `https://hot-house.onrender.com/api/v1/food/customization/meatToppings`,
      meatFetcher
    );

    if (baseLoading) return <div>Loading...</div>;
    if (baseError) return <div>Error loading data</div>;

    if (sizeLoading) return <div>Loading...</div>;
    if (sizeError) return <div>Error loading data</div>;

    if (sauceLoading) return <div>Loading...</div>;
    if (sauceError) return <div>Error loading data</div>;

    if (vegLoading) return <div>Loading...</div>;
    if (vegError) return <div>Error loading data</div>;


    if (meatLoading) return <div>Loading...</div>;
    if (meatError) return <div>Error loading data</div>;

    
    if (cheeseLoading) return <div>Loading...</div>;
    if (cheeseError) return <div>Error loading data</div>;



  const SEAFOODTOPPINGS = [
    { toppingName: "Anchovy" },
    { toppingName: "Prawns" },
    { toppingName: "Tuna" },
  ];

  const handleSelectionChange = (setSelections, name, type) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [name]: prevSelections[name] === type ? undefined : type,
    }));
  };

  const renderTable = (data, selections, setSelections) => (
    <div className="mt-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b">Single £</th>
            <th className="py-2 px-4 border-b">Double £</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item?._id}>

              <td className="py-2 px-4 border-b">
                {item?.name}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <input
                  className="mx-2"
                  type="checkbox"
                  // checked={
                  //   selections[
                  //     item?.SauceName || item?.CheeseName || item?.toppingName
                  //   ] === "single"
                  // }
                  onChange={() =>
                    handleSelectionChange(
                      setSelections,
                      item?.SauceName || item?.CheeseName || item?.toppingName,
                      "single"
                    )
                  }
                />
              <>{item?.doublePrice} £</>


              </td>
              <td className="py-2 px-4 border-b text-center">
                
                <div>
                <input
                  className="mx-2"
                  type="checkbox"
                  checked={
                    selections[
                      item?.name
                    ] === "double"
                  }
                  onChange={() =>
                    handleSelectionChange(
                      setSelections,
                      item.SauceName || item.CheeseName || item.toppingName,
                      "double"
                    )
                  }
                />
                  {item?.doublePrice} £
                </div>
               


              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">HAWAIIAN</h1>
            <p className="mt-2 text-gray-600">
              Tops mozzarella cheese, Special tomato sauce, Pineapple & Ham
            </p>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg">
                Save
              </button>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">SIZES:</h2>
              <div className="mt-2 space-y-2">
                {sizeData && sizeData?.data.map((size) => (
                  <label key={size?._id} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="size"
                      // value={size.toLowerCase().replace(/\"| /g, "")}
                    />
                    <span className="ml-2">{size?.name} <>{size?.price}$</></span>
                    
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">BASE:</h2>
              <div className="mt-2 space-y-2">
                {baseData && baseData.data?.map((base) => (
                  <label key={base?._id} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="base"
                      // value={base.toLowerCase().replace(/\"| /g, "")}
                    />
                    <span className="ml-2">{base?.name} <>{base?.price}$</></span>

                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <img
              src="https://topspizza.co.uk/storage/2.jpg"
              alt="Hawaiian Pizza"
              className="w-[360px] h-[360px] rounded-lg"
            />
            <p className="mt-2 text-gray-600 text-center">
              Pineapple, Ham, Mozzarella, No Sauce
            </p>
          </div>
        </div>
      </div>

      {/* SAUCE: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">SAUCE:</h2>
        {sauceData &&  renderTable(sauceData?.data, sauceSelections, setSauceSelections)}
      </div>

      {/* CHEESE: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">CHEESE:</h2>
        {cheeseData && renderTable(cheeseData?.data, cheeseSelections, setCheeseSelections)}
      </div>

      {/* VEGETARIAN TOPPINGS: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">
          VEGETARIAN TOPPINGS:
        </h2>
        {vegData && renderTable(vegData?.data, vegetarianSelections, setVegetarianSelections)}
      </div>

      {/* MEAT TOPPINGS: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">MEAT TOPPINGS:</h2>
        {meatData && renderTable(meatData?.data, meatSelections, setMeatSelections)}
      </div>



      <div className="max-w-4xl mx-auto p-4">
        <button className="bg-[#39A144] text-white w-full px-10 p-2 rounded">
          Save
        </button>
      </div>
    </>
  );
};

export default Product;
