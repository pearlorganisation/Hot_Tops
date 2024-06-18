// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import FoodItems from "../pages/Food/Pizzas/FoodItems";
import FoodCustomization from "../pages/Food/FoodCustomization/FoodCustomization";
import CreatePizza from "../pages/Food/Pizzas/CreatePizza";
import Category from "../pages/Sides/Category/Category";
import CreateCategory from "../pages/Sides/Category/CreateCategory";
import CreateFilter from "../pages/Sides/Filter/CreateFilter";
import Filter from "../pages/Sides/Filter/Filter";
// ---------------------------------------------------------------------------------------------------

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/food-items",
        element: <FoodItems />,
      },
      {
        path: "/food-customization",
        element: <FoodCustomization />,
      },
      {
        path: "/create-pizza",
        element: <CreatePizza />,
      }
      ,
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/createCategory",
        element: <CreateCategory />,
      },
      {
        path: "/sidesFilter",
        element: <Filter />,
      },
      {
        path: "/createSidesFilter",
        element: <CreateFilter />,
      },
    ],
  },
]);
