// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import FoodCustomization from "../pages/Food/FoodCustomization/FoodCustomization";
import Category from "../pages/Sides/Category/Category";
import CreateCategory from "../pages/Sides/Category/CreateCategory";
import CreateFilter from "../pages/Sides/Filter/CreateFilter";
import Filter from "../pages/Sides/Filter/Filter";
import Sides from "../pages/Sides/Sides";
import CreateSides from "../pages/Sides/CreateSides";
import CreateDessertCategory from "../pages/Dessert/Category/CreateCategory";
import DessertCategory from "../pages/Dessert/Category/Category";
import CreateDessertFilter from "../pages/Dessert/Filter/CreateFilter"
import DessertFilter from "../pages/Dessert/Filter/Filter"
import CreateDessert from "../pages/Dessert/CreateDessert";
import Dessert from "../pages/Dessert/Dessert";
import CreateDrink from "../pages/Drink/CreateDrink";
import Drink from "../pages/Drink/Drink";
import Dip from "../pages/Dip/Dip";
import CreateDip from "../pages/Dip/CreateDip";
import PizzaCategory from "../pages/Pizza/Category/Category";
import CreatePizzaCategory from "../pages/Pizza/Category/CreateCategory";
import PizzaFilter from "../pages/Pizza/Filter/Filter";
import CreatePizzaFilter from "../pages/Pizza/Filter/CreateFilter";
import Pizza from "../pages/Pizza/Pizza";
import CreatePizza from "../pages/Pizza/CreatePizza";
import UpdateDessert from "../pages/Dessert/EditDessert";
// ---------------------------------------------------------------------------------------------------

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      // {
      //   path: "/food-items",
      //   element: <FoodItems />,
      // },
      {
        path: "/food-customization",
        element: <FoodCustomization />,
      },
      {
        path: "/create-pizza",
        element: <CreatePizza />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/createCategory",
        element: <CreateCategory />,
      },
      {
        path: "/sides",
        element: <Sides />,
      },
      {
        path: "/createSides",
        element: <CreateSides />,
      },
      {
        path: "/sidesFilter",
        element: <Filter />,
      },
      {
        path: "/createSidesFilter",
        element: <CreateFilter />,
      },
      {
        path: "/dessertCategory",
        element: <DessertCategory />,
      },
      {
        path: "/createDessertCategory",
        element: <CreateDessertCategory />,
      },
      {
        path: "/createDessertFilter",
        element: <CreateDessertFilter />,
      },
      {
        path: "/dessertFilter",
        element: <DessertFilter />,
      },
      {
        path: "/dessert",
        element: <Dessert />,
      },
      {
        path: "/createDessert",
        element: <CreateDessert />,
      },
      {
        path: "/updateDessert/:id",
        element: <UpdateDessert />,
      },
      {
        path: "/drink",
        element: <Drink />,
      },
      {
        path: "/createDrink",
        element: <CreateDrink />,
      },
      {
        path: "/dip",
        element: <Dip />,
      },
      {
        path: "/createDip",
        element: <CreateDip />,
      },
      {
        path: "/pizzaCategory",
        element: <PizzaCategory />,
      },
      {
        path: "/createPizzaCategory",
        element: <CreatePizzaCategory />,
      },
      {
        path: "/pizzaFilter",
        element: <PizzaFilter />,
      },
      {
        path: "/createPizzaFilter",
        element: <CreatePizzaFilter />,
      },
      {
        path: "/pizza",
        element: <Pizza />,
      },
      {
        path: "/createPizza",
        element: <CreatePizza/>,
      },
    ],
  },
]);
