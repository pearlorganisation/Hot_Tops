import React, { useEffect } from "react";
import SizeContainer from "./PizzaCustomizationFormComponents/SizeContainer";
import BaseContainer from "./PizzaCustomizationFormComponents/BaseContainer";
import CommonContainer from "./PizzaCustomizationFormComponents/CommonContainer";
import { useDispatch, useSelector } from "react-redux";
import { getBasePizza, getCheesePizza, getMeatTopping, getSaucePizza, getSizePizza, getVegetarianTopping  } from "../../../../../features/actions/pizza/getCustomization";
import { resetStatus } from "../../../../../features/slice/pizza/pizza";



const PizzaCustomizationForm = () => {


  // const { pizzaCustomization } = useSelector((state) => state?.pizza);

  const { sauce ,cheese ,vegetarianToppings,meatToppings ,isSuccess} = useSelector((state) => state?.pizza);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasePizza());
    dispatch(getSaucePizza());
    dispatch(getCheesePizza());
    dispatch(getSizePizza());
    dispatch(getMeatTopping());
    dispatch(getVegetarianTopping());

    dispatch(resetStatus(false));
    

  }, []);
console.log(resetStatus());
  useEffect(() => {
    if(resetStatus().payload)
   { dispatch(getBasePizza());
    dispatch(getSaucePizza());
    dispatch(getCheesePizza());
    dispatch(getSizePizza());
    dispatch(getMeatTopping());
    dispatch(getVegetarianTopping());

    dispatch(resetStatus(false));
  }


  }, []);



  return (
    <div className="categoryCustomizationFormContainer p-5 m-3 border border-gray-200 bg-gray-50 rounded-lg grid grid-cols-2 gap-10">
      {/* <SizeContainer size={size} /> */}
      <BaseContainer  />
      <SizeContainer />
      
        <CommonContainer  itemName={"Sauce"} items={sauce} />
        <CommonContainer  itemName={"Cheese"} items={cheese} />
        <CommonContainer  itemName={"VEGETARIAN TOPPINGS"} items={vegetarianToppings} />
        <CommonContainer  itemName={"MEAT TOPPINGS"} items={meatToppings} />
     
     
    </div>
  );
};

export default PizzaCustomizationForm;
