// -----------------------------------------------Imports------------------------------------------------
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import FoodItems from "./pages/Food/FoodItems/FoodItems";
import { appRouter } from "./routes/routes";
// ------------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
