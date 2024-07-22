import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Link from "next/link";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";

const PizzaCards = ({ data, idx }) => {
  const dispatch = useDispatch();
  const selectedSizeId = Array.isArray(data?.priceSection) && data?.priceSection[0]?.size?._id;
  const [selectedData, setSelectedData] = useState(selectedSizeId);

  const selectedLabelName = Array.isArray(data?.priceSection) && `${data?.priceSection[0]?.size?.name}-${data?.priceSection[0]?.price}`;
  const [selectedLabel, setSelectedLabel] = useState(selectedLabelName);

  const handleChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const value = event.target.value;
    const label = selectedOption.getAttribute("data-label");

    setSelectedData(value);
    setSelectedLabel(label);
  };


  const combineNames = () => {

    const items = [
      data?.meatToppingsName,
      data?.vegetarianToppingsName,
      data?.cheeseName,
      data?.sauceName
    ].filter(item => item && item.length > 0);
    console.log(items)
    return items.join(', ');
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-md max-w-[17rem]  2xl:max-w-xs w-full newshadow mb-10 " key={idx}>
        <img src={data?.banner} alt="Card Image" className="h-52 w-full rounded-t-md object-cover" />
      <div className=" h-full px-2">
        <div className="mt-3">
          <h2 className="text-xl font-semibold mb-1 ">{data?.pizzaName}</h2>
          <p className="text-sm font-semibold text-gray-500 mb-4">{combineNames()}</p>
        </div>
      </div>

      <div className="mt-3 mb-1 flex- flex-col items-end ">
        <div className="">
          <select
            onChange={handleChange}
            value={selectedData}
            name="pizzas"
            id="pizzas"
            className="border-2 mx-auto p-2 w-full "
          >
            {data?.priceSection.map((data, idx) => {
              return (
                <option key={idx} value={data?.size?._id} data-label={`${data?.size?.name}-${data?.price}`}>
                  {`${data?.size?.name} £ ${data?.price}`}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex gap-3 items-center mt-2 px-2">
          <Link onClick={() => {
            selectedData && dispatch(getCustomizationDetails({
              name: data?.pizzaName,
              img: data?.banner,
              priceSection: data?.priceSection,
              id: data?._id,
              sauceName: data?.sauceName,
              cheeseName: data?.cheeseName,
              vegetarianToppingsName: data?.vegetarianToppingsName,
              meatToppingsName: data?.meatToppingsName,
              baseName: data?.baseName,
              selectedData: selectedData
            }))
          }} href={`/menu/product/${data?.pizzaName}`}>
            <TbEdit size={30}  className="text-slate-800 hover:text-red-800" />
          </Link>
          <div className="bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center w-full">
            <button
              onClick={() => {

                selectedData && dispatch(addToCart({
                  name: data?.pizzaName,
                  img: data?.banner,
                  size: selectedLabel,
                  id: data?._id,
                  quantity: 1,
                  price:Number(selectedLabel.split('-')[1]),
                  totalSum:Number(selectedLabel.split('-')[1])
                }));
              }}
              className="text-center rounded-lg w-full p-2 text-white"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PizzaCards;