import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPizzasFilter } from "../../../features/actions/pizza/getPizzasFilter";
import { useSelector } from "react-redux";
import { getPizzasCategories } from "../../../features/actions/pizza/getPizzasCategories";

const CreatePizza = () => {
  const size = ["supersize", "large", "medium", "small"];
  // -------------------------hooks------------------------------------
  const dispatch = useDispatch();
  const { pizzaFilter } = useSelector((state) => state?.pizza);
  const { pizzaCategory } = useSelector((state) => state?.pizza);

  // -------------------------------------useEffect---------------------------------
  useEffect(() => {
    dispatch(getPizzasFilter());
    dispatch(getPizzasCategories());
  }, []);

  return (
    <div className="px-2 my-4">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                select filter
              </th>
              <th scope="col" class="px-6 py-3">
                <div>
                  <select id="filter" className="p-2 border-2">
                    {Array.isArray(pizzaFilter?.data) &&
                      pizzaFilter?.data?.length > 0 &&
                      pizzaFilter?.data?.map((data, idx) => {
                        return (
                          <option key={idx} value={data?.filter}>
                            {data?.filter}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3">
                Select category
              </th>
              <th scope="col" class="px-6 py-3">
                <div>
                  <select id="filter" className="p-2 border-2">
                    {Array.isArray(pizzaCategory?.data) &&
                      pizzaCategory?.data?.length > 0 &&
                      pizzaCategory?.data?.map((data) => {
                        return (
                          <option value={data?.category}>
                            {data?.category}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3">
                image
              </th>
              <th scope="col" class="px-6 py-3">
                <div>
                  <input id="name" type="file" className="p-2 border-2"></input>
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                <div>
                  <input id="name" type="text" className="p-2 border-2"></input>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="flex gap-2 flex-col">
        <div>
          <label for="size" className=" font-semibold">
            PRICE(Є)
          </label>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Size
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Price(Є)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {size.map((data) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data}
                    </th>
                    <td class="px-6 py-4">
                      <input
                        id="name"
                        type="number"
                        className="p-2 border-2"
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatePizza;
