import React from "react";

const CreatePizza = () => {
  const size = ["supersize", "large", "medium", "small"];

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
                    <option value="hot">Hot</option>
                    <option value="hot">bbq</option>
                    <option value="hot">garlic</option>
                    <option value="hot">tomato</option>
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
                    <option value="hot">Meat</option>
                    <option value="hot">vegan and gluteen</option>
                    <option value="hot">veg</option>
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
