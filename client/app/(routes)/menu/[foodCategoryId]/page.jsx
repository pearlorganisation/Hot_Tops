"use client";

import React from "react";
import { categoryEnum } from "@/app/utils/utils";
import { notFound, usePathname } from "next/navigation";
import NotFound from "./not-found";
import Drinks from "@/app/_components/FoodCategories/Drinks/page";

const FoodCategory = () => {
  // -----------------------------Hooks---------------------------------------------
  const pathName = usePathname();

  const route = pathName.replace("/menu/", "").toUpperCase();

  if (!categoryEnum?.includes(route)) {
    notFound();
  }

  return (
    <div>
      <Drinks />
    </div>
  );
};

export default FoodCategory;
