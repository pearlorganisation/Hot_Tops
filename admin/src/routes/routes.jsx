// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import FoodItems from "../pages/Food/Pizzas/FoodItems";
import FoodCustomization from "../pages/Food/FoodCustomization/FoodCustomization";
import CreatePizza from "../pages/Food/Pizzas/CreatePizza";
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
      },
    ],
  },
]);
