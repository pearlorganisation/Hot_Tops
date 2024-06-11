// --------------------------------------------Imports-------------------------------------------
import React, { useEffect, useState } from "react";
import SizeContainer from "./PizzaCustomizationFormComponents/SizeContainer";
import BaseContainer from "./PizzaCustomizationFormComponents/BaseContainer";
import CommonContainer from "./PizzaCustomizationFormComponents/CommonContainer";
import axios from "axios";
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

  const [data,setData] = useState();


  // -----------------------------------------------Refs-------------------------------------------------
    useEffect(()=>{
      
      async function getData()
      {
        const response = await axios.get("https://hot-house.onrender.com/api/v1/food/customization");

       
          
            setData(response.data);
            console.log(response.data) 
          

      } 
    

      getData();

    },[]);
   

    


  // ------------------------------------------------------------------------------------------------
  return (
    <div className="categoryCustomizationFormContainer  p-5 m-3 border border-gray-200 bg-gray-50 rounded-lg grid grid-cols-2 gap-10">

      
      <SizeContainer />
      <BaseContainer />
      {pizzaItems.map((item) => {
        return <CommonContainer itemName={item} />;
      })}
    </div>
  );
};

export default PizzaCustomizationForm;
