import React from "react";
import FoodCustomizationTab from "./FoodCustomizationTab";
import PizzaCustomizationForm from "./FoodCustomizationForms/PizzaCustomizationForm/PizzaCustomizationForm";

const FoodCustomization = () => {
  return (
    <div className="p-2">
      <FoodCustomizationTab />
      <PizzaCustomizationForm />
    </div>
  );
};

export default FoodCustomization;
