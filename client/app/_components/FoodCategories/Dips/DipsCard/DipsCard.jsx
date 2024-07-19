import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";

const dipssCard = ({ data }) => {
  const dispatch = useDispatch();

  // State to manage selected dips type and price
  const [selecteddips, setSelecteddips] = useState(
    `${data.price[0].dipsType}-${data.price[0].price}`
  );

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const [dipsType, price, dipsName] = selecteddips.split("-");
    dispatch(
      addToCart({
        name: data?.dips,
        img: data.banner,
        size: selecteddips,
        id: data?._id,
        quantity: 1,
        price: Number(selecteddips.split('-')[1]),
        totalSum: Number(selecteddips.split('-')[1])
      })
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-3">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-lg object-cover w-full h-56"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{data.dips}</h2>
        <div className="relative flex flex-col gap-4">
          <p>
            <select
              value={selecteddips}
              onChange={(event) => setSelecteddips(event.target.value)}
              className="w-full border-2 rounded-l-lg p-3"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              {data.price.map((dips) => (
                <option key={dips._id} value={`${dips.dipsType}-${dips.price}`}>
                  {`${dips.dipsType} £${dips.price}`}
                </option>
              ))}
            </select>
          </p>
          <div
            className="bg-green-600 hover:bg-green-500 cursor-pointer"
            onClick={handleAddToCart}
          >
            <p className="text-center p-2 text-white">Add</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default dipssCard;
