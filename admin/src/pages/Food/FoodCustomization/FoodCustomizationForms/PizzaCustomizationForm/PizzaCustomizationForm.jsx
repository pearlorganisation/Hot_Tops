// --------------------------------------------Imports-------------------------------------------
import React from "react";
import SizeContainer from "./PizzaCustomizationFormComponents/SizeContainer";
import BaseContainer from "./PizzaCustomizationFormComponents/BaseContainer";
import CommonContainer from "./PizzaCustomizationFormComponents/CommonContainer";
// ------------------------------------------------------------------------------------------------

const PizzaCustomizationForm = () => {
  // --------------------------------------------States-------------------------------------------
  const pizzaItems = [
    "Sauce",
    "Cheese",
    "Veggetarian Toppings",
    "Meat Toppings",
    "Seafood Toppings",
  ];
  // ------------------------------------------------------------------------------------------------
  return (
    <form className="categoryCustomizationFormContainer  p-5 border border-gray-300 rounded-lg bg-gray-100">
      <SizeContainer />
      <BaseContainer />
      {pizzaItems.map((item) => {
        return <CommonContainer itemName={item} />;
      })}
    </form>
  );
};

export default PizzaCustomizationForm;
