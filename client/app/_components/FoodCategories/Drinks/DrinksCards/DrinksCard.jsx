import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";

const DrinksCard = ({ data }) => {
  const [drinkId, setDrinkId] = useState(data.price[0]._id)
  const dispatch = useDispatch();



  // State to manage selected drink type and price
  const [selectedDrink, setSelectedDrink] = useState(
    `${data.price[0].drinkType}-${data.price[0].price}`
  );

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const [drinkType, price, drinkName] = selectedDrink.split("-");
    dispatch(
      addToCart({
        name: data?.drink,
        img: data.banner,
        size: selectedDrink,
        id: drinkId,
        quantity: 1,
        price: Number(selectedDrink.split('-')[1]),
        totalSum: Number(selectedDrink.split('-')[1])
      })
    );
    setIsAddClicked(true);
  };

  return (
    <div className="bg-white shadow-md rounded-md max-w-[15rem] w-full newshadow">
      <img
        src={data.banner}
        alt="Card Image"
        className="rounded-t-md object-cover w-full h-44"
      />

      <h2 className="text-xl font-semibold mb-2 p-4">{data.drink}</h2>
      <div>

        <select
          value={selectedDrink}
          onChange={(event) => {
            const [a, b, priceId] = event.target.value.split('-')
            setDrinkId(priceId)
            setSelectedDrink(event.target.value)
          }}
          className="w-full border-2  p-2 my-2"

        >
          {data.price.map((drink) => (
            <option
              key={drink._id}
              value={`${drink.drinkType}-${drink.price}-${drink?._id}`}
            >
              {`${drink.drinkType} £ ${drink.price}`}
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
    </div>


  );
};

export default DrinksCard;
