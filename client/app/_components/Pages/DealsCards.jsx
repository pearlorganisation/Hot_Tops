"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const DealsCards = ({ data, path }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    setSelectedOption(data.sizes[0]);
  }, []);

  const dataHomePagePath = path;
  const combineItems = () => {
    const { chooseItems } = data;
    const items = Object.keys(chooseItems)
      .filter((key) => chooseItems[key] > 0)
      .map((key) => {
        const quantity = chooseItems[key];
        const itemName = quantity > 1 ? key : key.slice(0, -1); // remove 's' for singular items
        return `${quantity} ${itemName}`;
      });

    console.log(items); // For debugging: ["2 pizzas", "1 dip", "2 desserts"]
    return items.join(", ");
  };

  return (
    <div className="bg-white shadow-md rounded-md max-w-xs w-full newshadow ">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-md w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
        <p className="text-sm font-semibold text-gray-500 mb-4">
          {combineItems()} , {data?.defaultItems}
        </p>

        <div className="mt-3 ">
          <div className="max-w-sm mx-auto flex gap-1">
            {data.sizes?.length === 1 ? (
              <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-700">
                {`£ ${data.sizes[0].price}`}
              </div>
            ) : (
              <Select
                className="w-full"
                placeholder={`${data.sizes[0].size} £${data.sizes[0].price}`}
                options={data.sizes.map((size) => ({
                  label: `${size.size} £${size.price}`,
                  value: size._id,
                }))}
                onChange={(option) => setSelectedOption(option)}
              />
            )}

            <Link
              href={{
                pathname: path
                  ? `${path}/deals/deals_view`
                  : `deals/deals_view`,
                query: { card_id: data?._id, size_id: selectedOption?._id },
              }}
              className="hover:bg-green-700 bg-green-600 text-white p-2 rounded-lg"
            >
              Go
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCards;
