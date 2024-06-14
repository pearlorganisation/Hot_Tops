import React, { useEffect } from "react";
import SizeContainer from "./PizzaCustomizationFormComponents/SizeContainer";
import BaseContainer from "./PizzaCustomizationFormComponents/BaseContainer";
import CommonContainer from "./PizzaCustomizationFormComponents/CommonContainer";
import { useDispatch, useSelector } from "react-redux";
// import { getPizzaCustomization } from "../../../../../features/actions/pizza/getPizzaCustomization";
import { getBasePizza } from "../../../../../features/actions/pizza/getCustomization/getBasePizza";
import { getSizePizza} from "../../../../../features/actions/pizza/getCustomization/getSlicePizza";
import { getSaucePizza } from "../../../../../features/actions/pizza/getCustomization/getSaucePizza";
import { getCheesePizza } from "../../../../../features/actions/pizza/getCustomization/getCheesePizza";
import { getSeaFoodTopping } from "../../../../../features/actions/pizza/getCustomization/getSeaFoodTopping";
import { getMeatTopping } from "../../../../../features/actions/pizza/getCustomization/getMeatTopping";
import { getVegetarianTopping } from "../../../../../features/actions/pizza/getCustomization/getVegetarianTopping";

const PizzaCustomizationForm = () => {
  const pizzaItems = [
    "sauce",
    "cheese",
    // "veggetarianToppings",
    // "meatToppings",
    // "seafoodToppings",
  ];

  // const { pizzaCustomization } = useSelector((state) => state?.pizza);

  const { sauce ,base,cheese ,vegetarianToppings,meatToppings ,seaTopping} = useSelector((state) => state?.pizza);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasePizza());
    dispatch(getSaucePizza());
    dispatch(getCheesePizza());
    dispatch(getSizePizza());
    dispatch(getSeaFoodTopping());
    dispatch(getMeatTopping());
    dispatch(getVegetarianTopping());

  }, [dispatch]);

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
