"use client";
import React, { useState } from "react";

const Product = () => {
  const [cheeseSelections, setCheeseSelections] = useState({});
  const [sauceSelections, setSauceSelections] = useState({});
  const [vegetarianSelections, setVegetarianSelections] = useState({});
  const [meatSelections, setMeatSelections] = useState({});
  const [seafoodSelections, setSeafoodSelections] = useState({});

  const cheeseData = [
    { CheeseName: "3 blend cheese" },
    { CheeseName: "Mozzarella" },
  ];

  const SAUCE = [
    { SauceName: "BBQ Sauce" },
    { SauceName: "Garlic Sauce" },
    { SauceName: "Hot BBQ Sauce" },
    { SauceName: "Smoky Sausage" },
    { SauceName: "Tomato Sauce" },
    { SauceName: "No Sauce" },
  ];

  const VEGETARIAN = [
    { toppingName: "Black Olives" },
    { toppingName: "Feta cheese" },
    { toppingName: "Fresh tomato" },
    { toppingName: "Green chilli" },
    { toppingName: "Green pepper" },
    { toppingName: "Jalapeno" },
    { toppingName: "Mushrooms" },
    { toppingName: "Mustard mayo" },
    { toppingName: "Pineapple" },
  ];

  const MEATTOPPINGS = [
    { toppingName: "Bacon" },
    { toppingName: "Beef" },
    { toppingName: "Chicken Tikka" },
    { toppingName: "Chorizo Sausage" },
    { toppingName: "German hot dog" },
    { toppingName: "Ham" },
    { toppingName: "Meatballs" },
    { toppingName: "Mexican Chicken" },
    { toppingName: "Pepperoni" },
  ];

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
            <th className="py-2 px-4 border-b">Single +£1.5</th>
            <th className="py-2 px-4 border-b">Double +£3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td className="py-2 px-4 border-b">
                {item.SauceName || item.CheeseName || item.toppingName}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <input
                  type="checkbox"
                  checked={
                    selections[
                      item.SauceName || item.CheeseName || item.toppingName
                    ] === "single"
                  }
                  onChange={() =>
                    handleSelectionChange(
                      setSelections,
                      item.SauceName || item.CheeseName || item.toppingName,
                      "single"
                    )
                  }
                />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <input
                  type="checkbox"
                  checked={
                    selections[
                      item.SauceName || item.CheeseName || item.toppingName
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
                {[
                  'Supersize 15.5"',
                  'Large 13.5"',
                  'Medium 10.5"',
                  'Small 7"',
                ].map((size, index) => (
                  <label key={index} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="size"
                      value={size.toLowerCase().replace(/\"| /g, "")}
                    />
                    <span className="ml-2">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">BASE:</h2>
              <div className="mt-2 space-y-2">
                {[
                  "Cheezy Crust +£3.00",
                  "Deep Pan",
                  "Hot Dog Crust +£3.00",
                  "Pepperoni Crust +£3.00",
                  "Thin Crust",
                ].map((base, index) => (
                  <label key={index} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="base"
                      value={base.toLowerCase().replace(/\"| /g, "")}
                    />
                    <span className="ml-2">{base}</span>
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
        {renderTable(SAUCE, sauceSelections, setSauceSelections)}
      </div>

      {/* CHEESE: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">CHEESE:</h2>
        {renderTable(cheeseData, cheeseSelections, setCheeseSelections)}
      </div>

      {/* VEGETARIAN TOPPINGS: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">
          VEGETARIAN TOPPINGS:
        </h2>
        {renderTable(VEGETARIAN, vegetarianSelections, setVegetarianSelections)}
      </div>

      {/* MEAT TOPPINGS: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">MEAT TOPPINGS:</h2>
        {renderTable(MEATTOPPINGS, meatSelections, setMeatSelections)}
      </div>

      {/* SEAFOOD TOPPINGS: */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">
          SEAFOOD TOPPINGS:
        </h2>
        {renderTable(SEAFOODTOPPINGS, seafoodSelections, setSeafoodSelections)}
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
