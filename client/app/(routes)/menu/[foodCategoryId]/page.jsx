"use client";

import React from "react";
import { categoryEnum } from "@/app/utils/utils";
import { notFound, usePathname } from "next/navigation";
import NotFound from "./not-found";
import Drinks from "@/app/_components/FoodCategories/Drinks/page";
import Pizzas from "@/app/_components/FoodCategories/Pizzas/Pizzas";
import Sides from "@/app/_components/FoodCategories/Sides/Sides";
import Desserts from "@/app/_components/FoodCategories/Desserts/Desserts";
import Dips from "@/app/_components/FoodCategories/Dips/Dips";

const FoodCategory = () => {
  // -----------------------------Hooks---------------------------------------------
  const pathName = usePathname();

  const route = pathName.replace("/menu/", "").toUpperCase();
  console.log(route);
  if (!categoryEnum?.includes(route)) {
    notFound();
  } else {
    switch (route.toLowerCase()) {
      case "pizzas":
        return <Pizzas />;

        break;
      case "sides":
        return <Sides />;

        break;
      case "drinks":
        return <Drinks />;

        break;

      case "desserts":
        return <Desserts />;
        break;

      case "dips":
        return <Dips />;
        break;

      default:
        return <Pizzas />;
        break;
    }
  }
};

export default FoodCategory;
