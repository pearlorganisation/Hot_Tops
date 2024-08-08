import React, { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react';
import Sauce from '../customization/sauce/Sauce';
import Cheese from '../customization/cheese/Cheese';
import VegetarianToppings from '../customization/vegetarianToppings/VegetarianToppings';
import MeatToppings from '../customization/meatToppings/MeatToppings';
import { useDispatch, useSelector } from 'react-redux';
import { addDealsData, setDefaultPrice, setToppings } from '@/app/lib/features/cartSlice/cartSlice';
import TotalPriceCard from '../TotalPriceCard/TotalPriceCard';

const PizzaCustomizationModal = forwardRef(({ pizzaIndex, pizzaData,setDealDataPizza }, ref) => {
  const modalRef = useRef(null);






  useImperativeHandle(ref, () => ({
    open() {
      if (modalRef.current) {
        modalRef.current.showModal(); // Use showModal() to open the dialog
      }
    },
    close() {
      if (modalRef.current) {
        modalRef.current.close(); // Use close() to close the dialog
      }
    }
  }));

  const { customizationData } = useSelector((state) => state.orderDetails);
  const { allToppings, defaultPrice } = useSelector(
    (state) => state.cart
  );  const dispatch = useDispatch();


  const combineNames = () => {
    const items = [
      customizationData?.meatToppingsName,
      customizationData?.vegetarianToppingsName,
      customizationData?.cheeseName,
      customizationData?.sauceName,
    ].filter((item) => item && item.length > 0);

    // Join the items with a comma
    return items.join(", ");
  };

  const [basePrices, setBasePrices] = useState([]);
  const [cheesePrices, setCheesePrices] = useState([]);
  const [saucePrices, setSaucePrices] = useState([]);
  const [vegetarianToppingsPrices, setVegetarianToppingsPrices] = useState([]);
  const [meatToppingsPrices, setMeatToppingsPrices] = useState([]);

  const [selectedSizeId, setSelectedSizeId] = useState(
    customizationData?.priceSection.length === 1
      ? customizationData?.priceSection[0]?.size._id
      : customizationData?.selectedData
  );

  const [selectedBase, setSelectedBase] = useState(
    customizationData?.baseName || ""
  );
  const [selectedCheese, setSelectedCheese] = useState(
    customizationData?.cheeseName || ""
  );
  const [selectedSauce, setSelectedSauce] = useState(
    customizationData?.sauceName || ""
  );
  const [selectedMeatToppings, setSelectedMeatToppings] = useState(
    customizationData?.meatToppingsName || ""
  );
  const [selectedVegetarianToppings, setSelectedVegetarianToppings] = useState(
    customizationData?.vegetarianToppingsName || ""
  );

  useEffect(() => {
    if (customizationData) {
      const size = customizationData?.priceSection.find(item => {
        return item?.size?._id === selectedSizeId
      })
      dispatch(setToppings(size))
    }
  }, [selectedSizeId]);

  useEffect(() => {
    if (basePrices) {
      const base = basePrices?.find(item => {
        return item?.name === selectedBase
      })
      dispatch(setToppings({ base: base }))
    }
  }, [basePrices, selectedBase]);
  const handleRadioChange = async (e) => {
    const newSizeId = e.target.value;
    setSelectedSizeId(newSizeId);


    // Fetch new prices based on the selected size
    await fetchPricesForSelectedSize(newSizeId);
  };

  useEffect(() => {
    fetchPricesForSelectedSize(selectedSizeId);
    // console.log(selectedSizeId)
  }, [selectedSizeId]);

  useEffect(() => {
    setSelectedSizeId(customizationData?.selectedData);
  }, [customizationData]);





  // -------------------data fetching for price-----------------------

  const fetchPricesForSelectedSize = async (sizeId) => {
    // console.log(sizeId)
    try {
      if (sizeId) {

        const [baseResponse, sauceResponse, cheeseResponse, meatToppingsResponse, vegetarianToppingsResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/base/price?sizeId=${sizeId}`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/sauce/price?sizeId=${sizeId}`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/cheese/price?sizeId=${sizeId}`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/meatToppings/price?sizeId=${sizeId}`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/food/customization/vegetarianToppings/price?sizeId=${sizeId}`),
        ]);

        const basePriceData = await baseResponse.json();

        const saucePriceData = await sauceResponse.json();

        const cheesePriceData = await cheeseResponse.json();

        const meatToppingsPriceData = await meatToppingsResponse.json();

        const vegetarianToppingsPriceData = await vegetarianToppingsResponse.json();



        setBasePrices(basePriceData.data);
        setMeatToppingsPrices(meatToppingsPriceData.data);
        setVegetarianToppingsPrices(vegetarianToppingsPriceData.data);
        setSaucePrices(saucePriceData.data);
        setCheesePrices(cheesePriceData.data);
      }
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };


  const handleCustomization = () => {

    setDealDataPizza((prevState)=>{
      const temp = prevState;
      temp[pizzaIndex.current] = {
        ...pizzaData[pizzaIndex.current],
        cheeseName: allToppings.cheese,
        meatToppingsName: allToppings.meat ,
        sauceName: allToppings.sauce ,
        vegetarianToppingsName: allToppings.veg ,
        baseName: allToppings.base ,
        pizzaPrice:Number(allToppings.totalPrice),
        pizzaExtraToppingPrice:Number(Math.max(0, (allToppings?.extraPrice - defaultPrice).toFixed(2))) ,
      }
      return temp;
    })

    // console.log("we came into the customizxation !!");

    modalRef.current.close();

  }

  useEffect(() => {
   if(customizationData){
    dispatch(setDefaultPrice({ arr: [cheesePrices, saucePrices, vegetarianToppingsPrices, meatToppingsPrices].flat(), customizationData: customizationData }))
   }
  }, [cheesePrices, saucePrices, vegetarianToppingsPrices, meatToppingsPrices, customizationData])






  return (
    <div>
      <dialog
        ref={modalRef}
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 border-2 border-red-600     h-[80vh]"
      >
        <button onClick={() => modalRef.current.close()} >Close</button>
        <div className="relative p-4 w-full  max-h-full">
          <div className="md:max-w-6xl  mx-auto p-4 bg-white shadow-md rounded-lg my-">
            <div className="flex flex-col md:flex-row ">
              <div className="flex-1">
                <h1 className="text-4xl  text-gray-800">
                  {customizationData?.name}
                </h1>
                <p className="mt-2 text-gray-600">{combineNames()}</p>
              <div className="mt-4">
              <button onClick={handleCustomization} className="w-full px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg">
                Save
              </button>
            </div> 

                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">SIZES</h2>
                  <div className="mt-2 space-y-2">
                    {Array.isArray(customizationData?.priceSection) &&
                      customizationData?.priceSection.map((data, idx) => (
                        <label key={idx} className="inline-flex gap-2 items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="size"
                            value={data?.size?._id}
                            checked={
                              selectedSizeId && selectedSizeId === data?.size?._id
                            }
                            onChange={handleRadioChange}
                          />

                          <span className="mr-4 text-gray-900 ">{data?.size?.name}</span>
                        </label>
                      ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">BASE</h2>
                  <div className="mt-2 space-y-2">
                    {Array.isArray(basePrices) &&
                      basePrices?.map((base) => (
                        <label
                          key={base?._id}
                          className="inline-flex gap-2 items-center"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            onChange={(e) => {

                              const base = e.target.value;
                              setSelectedBase(base);
                            }}
                            name="base"
                            value={base?.name}
                            checked={selectedBase === base?.name}
                          />
                          <span className="mr-4 text-gray-900">
                            {base?.name}
                            <>
                              {" "}
                              {base?.price[0]?.price > 0 && (
                                <span className="bg-red-800 text-white rounded-lg px-1">
                                  + £ {base?.price[0]?.price}
                                </span>
                              )}
                            </>
                          </span>
                        </label>
                      ))}
                  </div>
                </div>



                {/* SAUCE STARTS */}
                <div>
                  <Sauce sauceData={saucePrices} />
                </div>
                {/* SAUCE ENDS */}

                {/* CHEESE: STARTS */}
                <Cheese cheeseData={cheesePrices} />
                {/* CHEESE: ENDS */}

                {/* VEGETARIAN TOPPINGS: STARTS */}
                <VegetarianToppings vegetarianTopData={vegetarianToppingsPrices} />
                {/* VEGETARIAN TOPPINGS: ENDS */}

                {/* MEAT TOPPINGS: STARTS */}
                <MeatToppings meatTopData={meatToppingsPrices} />
                {/* MEAT TOPPINGS: ENDS */}




                <div className="mt-4">
                  <button onClick={() => { handleCustomization();  modalRef.current.close(); }} className="bg-green-800 hover:bg-green-700 text-white w-full px-10 p-2 rounded">
                    Save
                  </button>
                </div>
              </div>

              <div className="hidden md:block md:ml-8">
                <img
                  src={customizationData?.img}
                  alt="Hawaiian Pizza"
                  className="w-[360px] h-[360px] rounded-lg"
                />
                <p className="w-[360px] text-gray-600 ">{combineNames()}</p>
              </div>
            </div>
          </div>
          <TotalPriceCard />

        </div>
      </dialog>
    </div>
  );
});

PizzaCustomizationModal.displayName = 'PizzaCustomizationModal';

export default PizzaCustomizationModal;
