"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const DealsCards = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    setSelectedOption(data.sizes[0]);
  }, []);

  function handleOrder() {
    if (selectedOption) {
      console.log("Selected value:", selectedOption);
      //   router.push("/menu/deals/deals_view", {
      //     query: { name: "shashakn" },
      //   });
    } else {
      console.log("No option selected");
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-4">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-lg w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
        <div className="relative">
          <div className="max-w-sm mx-auto flex gap-1">
            {data.sizes.length === 1 ? (
              <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-700">
                {`£${data.sizes[0].price}`}
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
                pathname: `deals/deals_view`,
                query: { card_id: data?._id, size_id: selectedOption?._id },
              }}
              //   onClick={handleOrder}
              className="hover:bg-green-400 bg-green-600 text-white p-2 rounded-lg"
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
