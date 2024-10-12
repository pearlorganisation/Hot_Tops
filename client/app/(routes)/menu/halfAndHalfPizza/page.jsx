"use client";
import Select from "react-select";
import React, { memo, useEffect, useReducer, useRef, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";
import PizzaCustomizationModal from "@/app/_components/Modals/PizzaCutomizationModal";
import { toast } from "sonner";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  let currentPizzaDetails;
  const halfAndHalfDataRef = useRef(new Array(2));
  const [pizzaData, setPizzaData] = useState(new Array(2));
  const [pizzaDataForSelect,setPizzaDataForSelect] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const modalRef = useRef();
  const currentIndex = useRef(null);
  let pizzaDataMapRef = useRef(new Map());
  let pizzaSizeMapRef = useRef(new Map());
  const pizzaCurrentSize = useRef(null);
  const dispatch = useDispatch();
  const [viewButton, setViewButton] = useState(false);
  const [sizeData, setSizeData] = useState(null);


  async function getPizzas() {
    setIsLoading(true);

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pizza`,
      {
        method: "GET",
      }
    );
    setIsLoading(false);

    const newData = await data.json();
    // pizzaDataForSelect = ;
    setPizzaDataForSelect(newData?.data?.map((el) => {
      if (pizzaDataMapRef) pizzaDataMapRef.current.set(el._id, el);
      return {
        label: el.pizzaName,
        value: el._id,
      };
    }))

    

    const priceSectionForSizes = pizzaDataMapRef?.current?.values().next().value;
    console.log(priceSectionForSizes,"pizzaSizeMapRef");

    priceSectionForSizes?.priceSection?.forEach((element) => {
      pizzaSizeMapRef.current.set(element.size._id, element);
    });

  }

  async function getSizes() {
    setIsLoading(true);

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/size`,
      {
        method: "GET",
      }
    );
    setIsLoading(false);
    const newData = await data.json();

    let sizeOptions = [];

    newData?.data?.forEach((element) => {
      const tempData = { label: element.name, value: element._id };
      sizeOptions.push(tempData);
    });

    setSizeData(sizeOptions);
  }
  
  

  function handlePizzaDataSubmissionToRedux(index) {
    currentPizzaDetails = pizzaDataMapRef.current.get(
      halfAndHalfDataRef.current[index].value
    );
    setPizzaData((prevState) => {
      prevState[index] = currentPizzaDetails;
      return prevState;
    });

    console.log(currentPizzaDetails, "currentPizzaDetails");
    console.log(pizzaSizeMapRef.current.get(pizzaCurrentSize.current.value), "currentPizzaDetails");
    
    dispatch(
      getCustomizationDetails({
        name: currentPizzaDetails.pizzaName,
        img: currentPizzaDetails.banner,
        id: currentPizzaDetails._id,
        sauceName: currentPizzaDetails.sauceName,
        meatName: currentPizzaDetails.meatToppingsName,
        cheeseName: currentPizzaDetails.cheeseName,
        baseName: currentPizzaDetails.baseName,
        vegetarianToppingsName: currentPizzaDetails.vegetarianToppingsName,
        priceSection: [pizzaSizeMapRef.current.get(pizzaCurrentSize.current.value)], //here we need price section object array ok
        selectedData: (pizzaSizeMapRef.current.get(pizzaCurrentSize.current.value))?.size?._id,
      })
    );
  }

  function handleAddToCart() {
    if (!pizzaData.every((item) => item !== null && item !== undefined)) {
      toast.error("Please Fill All Fields !!");
      return;
    }

    console.log("pizzaData", pizzaData);
    const pizzaOne = pizzaData[0];
    const pizzaTwo = pizzaData[1];

    delete pizzaOne?.priceSection;
    delete pizzaOne?.filter;
    delete pizzaOne?.createdAt;
    delete pizzaOne?.updatedAt;
    delete pizzaTwo?.priceSection;
    delete pizzaTwo?.createdAt;
    delete pizzaTwo?.updatedAt;
    delete pizzaTwo?.filter;

    const submitData = [pizzaOne, pizzaTwo];

    let extraPrice =
      Number(
        submitData
          ? submitData.reduce(
              (acc, currPizza) => acc + (currPizza.pizzaExtraToppingPrice || 0),
              0
            )
          : 0
      ) + 0;

    extraPrice = extraPrice / 2;

    let basePriceForPizza = pizzaSizeMapRef?.current?.get(pizzaCurrentSize?.current?.value).price ;

    if(isNaN(basePriceForPizza))
    {
      basePriceForPizza = 0;
    }
    else{
      basePriceForPizza/2;
    }
    dispatch(
      addToCart({
        name: "Half N Half Pizza",
        img: submitData[0].banner,
        size:pizzaSizeMapRef?.current?.get(pizzaCurrentSize?.current?.value).size.name||"Check Size Issue in add to cart reducer",
        id:
          submitData?._id +
          submitData.reduce((acc, currEle) => acc + currEle.id, ""),
        quantity: 1,
        price: Number(extraPrice + basePriceForPizza).toFixed(2),
        totalSum: Number(extraPrice + basePriceForPizza).toFixed(2),
        dealsData: submitData,
      })
    );

    router.push("/order/cart");
    console.log(submitData, "submitData");
    console.log(extraPrice, "submitData");
  }

  const handleOpeningModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
      setViewButton(true);
    }
  };

  useEffect(() => {
    getPizzas();
    getSizes();
  }, []);



  return (
    <>
      <PizzaCustomizationModal
        ref={modalRef}
        pizzaIndex={currentIndex}
        pizzaData={pizzaData}
        setViewButton={setViewButton}
        setDealDataPizza={setPizzaData}
      />
      <div className="p-10 h-screen">
        <div>
          <h1 className="text-4xl font-bold text-green-600">
            Half And Half Pizza
          </h1>
        </div>

        <div>
          <h1>Select Pizza Size</h1>
          {pizzaData && <Select options={sizeData} onChange={(e)=>{pizzaCurrentSize.current = e}} /> }
        </div>

        <div className="grid grid-cols-2 gap-8 p-10">
          <div className="p-2">
            <p className="text-2xl text-red-600 font-bold ">Pizza First Half</p>

            <div className="grid grid-cols-[10%_auto]  items-center">
              {
                <button
                  onClick={() => {
                    currentIndex.current = 0;
                    handlePizzaDataSubmissionToRedux(0);
                    handleOpeningModal();
                  }}
                >
                  <MdEditSquare
                    size={30}
                    className="text-red-800 hover:text-red-700"
                  />
                </button>
              }
              <div>
                {pizzaDataForSelect && pizzaDataMapRef.current && (
                  <Select
                    options={pizzaDataForSelect}
                    name="pizzaOne"
                    onChange={(e) => {
                      console.log(e);
                      halfAndHalfDataRef.current[0] = e;
                      pizzaData[0] = pizzaDataMapRef.current.get(e.value);
                      console.log(halfAndHalfDataRef);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="p-2">
            <p className="text-2xl text-red-600 font-bold ">
              Pizza Second Half
            </p>
            <div className="grid grid-cols-[10%_auto]  items-center">
              <button
                onClick={() => {
                  currentIndex.current = 1;
                  handlePizzaDataSubmissionToRedux(1);
                  handleOpeningModal();
                }}
              >
                <MdEditSquare
                  size={30}
                  className="text-red-800 hover:text-red-700"
                />
              </button>
              <div>
                {pizzaDataForSelect && pizzaDataMapRef.current && (
                  <Select
                    options={pizzaDataForSelect}
                    onChange={(e) => {
                      console.log(e);
                      halfAndHalfDataRef.current[1] = e;
                      pizzaData[1] = pizzaDataMapRef.current.get(e.value);
                      console.log(halfAndHalfDataRef);
                    }}
                    name="pizzaTwo"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-2">
          <button
            onClick={handleAddToCart}
            className="text-2xl bg-green-500 rounded-md p-4 font-bold text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
