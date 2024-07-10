import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Link from "next/link";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";

const PizzaCards = ({ data, idx }) => {

  // =-----------------------hooks--------------------------------

  const dispatch = useDispatch();
  const selectedSizeId= Array.isArray(data?.priceSection) && data?.priceSection[0]?.size?._id;
  const [selectedData, setSelectedData] = useState(selectedSizeId);

  const selectedLabelName= Array.isArray(data?.priceSection) && `${data?.priceSection[0]?.size?.name}-${data?.priceSection[0]?.price}`;
  const [selectedLabel, setSelectedLabel] = useState(selectedLabelName);
 
  const handleChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const value = event.target.value;
    const label = selectedOption.getAttribute("data-label");

    console.log("Selected value:", value);
    console.log("Selected label:", label);

    setSelectedData(value);
    setSelectedLabel(label);
  };

  const [isAddClicked, setIsAddClicked] = useState(false);


  return (
    <div
      className=" p-3 bg-white shadow-md rounded-lg max-w-[15rem] 2xl:max-w-xs w-full newshadow"
      key={idx}
    >
      <img
        src={data?.banner}
        alt="Card Image"
        className="rounded-t-lg w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{data?.pizzaName}</h2>
        <p
          className="text-sm font-semibold text-slate-800 mb-4"
        >
         {data?.meatToppingsName}{data?.meatToppingsName && ", "}{data?.vegetarianToppingsName}{data?.vegetarianToppingsName && ", "}{data?.cheeseName}{data?.cheeseName && ", "}{data?.sauceName}
        </p>
        <div>
          <select
            onChange={handleChange}
            value={selectedData}
            name="pizzas"
            id="pizzas"
            className="border-2 mx-auto p-2 w-full m-1"
           
          >
            {data?.priceSection.map((data, idx) => {
              return (
                <option value={data?.size?._id}  data-label={`${data?.size?.name}-${data?.price}`}>
                  {`${data?.size?.name} £ ${data?.price}`}
                </option>
              );
            })}
          </select>
        </div>
    
        <div className="relative flex justify-between items-center ">
          <Link onClick={()=>{
            selectedData && dispatch(getCustomizationDetails({
              name: data?.pizzaName,
              img: data?.banner,
              priceSection: data?.priceSection,
              id: data?._id,
              sauceName:data?.sauceName,
              cheeseName:data?.cheeseName,
              vegetarianToppingsName:data?.vegetarianToppingsName,
              meatToppingsName:data?.meatToppingsName,
              baseName:data?.baseName,
              selectedData:selectedData

            }))
          }} href={`/menu/product/${data?.pizzaName}`}>
            <TbEdit size={30} />
          </Link>
          <div className="bg-green-600 flex gap-2 items-center justify-center w-[80%]">
            <button
              onClick={() => {
                setIsAddClicked(true);
                selectedData &&
                  dispatch(
                    addToCart({
                      name: data?.pizzaName,
                      img: data?.banner,
                      size: selectedLabel,
                      id: data?._id,
                    })
                  );
              }}
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              data-modal-hide="popup-modal"
              className="text-center p-2 text-white "
              type="button"
            >
              Add
            </button>
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

export default PizzaCards;
