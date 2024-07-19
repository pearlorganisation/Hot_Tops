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
  const [isAddClicked, setIsAddClicked] = useState(false);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const [dipsType, price, dipsName] = selecteddips.split("-");
    dispatch(
      addToCart({
        name: data?.dips,
        img: data.banner,
        size: selecteddips,
        id: data?._id,
      })
    );
    setIsAddClicked(true);
  };

  return (
    <div className="bg-white shadow-md rounded-md max-w-[15rem] w-full newshadow ">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-md object-cover w-full h-44"
      />
 
        <h2 className="text-xl font-semibold p-4">{data.dips}</h2>
        <div >
        
            <select
              value={selecteddips}
              onChange={(event) => setSelecteddips(event.target.value)}
              className="border-2 p-2 w-full my-2"
             
            >
              {data.price.map((dips) => (
                <option key={dips._id} value={`${dips.dipsType}-${dips.price}`}>
                  {`${dips.dipsType} £ ${dips.price}`}
                </option>
              ))}
            </select>
         
          <div
            className="bg-green-600 hover:bg-green-700 cursor-pointer"
            onClick={handleAddToCart}
          >
            <p className="text-center p-2 text-white">Add</p>
          </div>
        </div>
  
      <AddedToCartModel
        isAddClicked={isAddClicked}
        setIsAddClicked={setIsAddClicked}
      />
    </div>
  );
};

export default dipssCard;
