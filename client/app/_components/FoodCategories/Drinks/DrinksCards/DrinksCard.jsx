import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";

const DrinksCard = ({ data }) => {
  const dispatch = useDispatch();

  // State to manage selected drink type and price
  const [selectedDrink, setSelectedDrink] = useState(
    `${data.price[0].drinkType}-${data.price[0].price}`
  );
  const [isAddClicked, setIsAddClicked] = useState(false);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const [drinkType, price, drinkName] = selectedDrink.split("-");
    dispatch(
      addToCart({
        name: data?.drink,
        img: data.banner,
        size: selectedDrink,
      })
    );
    setIsAddClicked(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-3">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-lg object-cover w-full h-56"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{data.drink}</h2>
        <div className="relative flex flex-col gap-4">
          <p>
            <select
              value={selectedDrink}
              onChange={(event) => setSelectedDrink(event.target.value)}
              className="w-full border-2 rounded-l-lg p-3"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              {data.price.map((drink) => (
                <option
                  key={drink._id}
                  value={`${drink.drinkType}-${drink.price}`}
                >
                  {`${drink.drinkType} £${drink.price}`}
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
      <AddedToCartModel
        isAddClicked={isAddClicked}
        setIsAddClicked={setIsAddClicked}
      />
    </div>
  );
};

export default DrinksCard;
