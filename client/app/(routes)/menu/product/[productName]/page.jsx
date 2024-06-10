import React from "react";

const product = () => {
  const cheesData = [
    {
      CheeseName: "3 blend cheese",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      CheeseName: "Mozzarella",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
  ];

  const SAUCE = [
    {
      SauceName: "BBQ Sauce",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      SauceName: "Garlic Sauce",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      SauceName: "Hot BBQ Sauce",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      SauceName: "Smoky Sausage",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      SauceName: "Tomato Sauce",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      SauceName: "No Sauce",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
  ];

  const VEGGETARIAN = [
    {
      toppingName: "Black Olives",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Feta cheese",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Fresh tomato",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Green chilli",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Green pepper",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Jalapeno",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Mushrooms",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Mustard mayo",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Pineapple",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
  ];
  const MEATTOPPINGS = [
    {
      toppingName: "Bacon",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Beef",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Chicken Tikka",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Chorizo Sausage",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "German hot dog",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Ham",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Meatballs",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Mexican Chicken",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Pepperoni",

      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
  ];
  const SEAFOODTOPPINGS = [
    {
      toppingName: "Anchovy",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Prawns",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
    {
      toppingName: "Tuna",
      quantity: [
        {
          single: false,
          double: false,
        },
      ],
    },
  ];

  return (
    <>
      <div class="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-gray-800">HAWAIIAN</h1>
            <p class="mt-2 text-gray-600">
              Tops mozzarella cheese, Special tomato sauce, Pineapple & Ham
            </p>
            <div class="mt-4">
              <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg ">
                Save
              </button>
            </div>

            <div class="mt-4">
              <h2 class="text-lg font-semibold text-gray-800">SIZES:</h2>
              <div class="mt-2 space-y-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="size"
                    value="supersize"
                  />
                  <span class="ml-2">Supersize 15.5"</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="size"
                    value="large"
                  />
                  <span class="ml-2">Large 13.5"</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="size"
                    value="medium"
                  />
                  <span class="ml-2">Medium 10.5"</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="size"
                    value="small"
                  />
                  <span class="ml-2">Small 7"</span>
                </label>
              </div>
            </div>

            <div class="mt-4">
              <h2 class="text-lg font-semibold text-gray-800">BASE:</h2>
              <div class="mt-2 space-y-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="base"
                    value="cheezy-crust"
                  />
                  <span class="ml-2">Cheezy Crust +£3.00</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="base"
                    value="deep-pan"
                  />
                  <span class="ml-2">Deep Pan</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="base"
                    value="hot-dog-crust"
                  />
                  <span class="ml-2">Hot Dog Crust +£3.00</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="base"
                    value="pepperoni-crust"
                  />
                  <span class="ml-2">Pepperoni Crust +£3.00</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="base"
                    value="thin-crust"
                  />
                  <span class="ml-2">Thin Crust</span>
                </label>
              </div>
            </div>
          </div>
          <div class="mt-4 md:mt-0 md:ml-8">
            <img
              src="https://topspizza.co.uk/storage/2.jpg"
              alt="Hawaiian Pizza"
              class="w-[360px] h-[360px] rounded-lg"
            />
            <p class="mt-2 text-gray-600 text-center">
              Pineapple, Ham, Mozzarella, No Sauce
            </p>
          </div>
        </div>
      </div>

      {/* SAUCE: */}
      <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">SAUCE:</h2>
          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"> </th>
                  <th class="py-2 px-4 border-b">Single +£1.5</th>
                  <th class="py-2 px-4 border-b">Double +£3</th>
                </tr>
              </thead>

              <tbody>
                {SAUCE.map((el, i) => {
                  return (
                    <tr>
                      <td class="py-2 px-4 border-b">{el.SauceName}</td>
                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_single"
                          value="bbq-sauce"
                          className=""
                        />
                      </td>
                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_double"
                          value="bbq-sauce"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">SAUCE:</h2>
          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"></th>
                  <th class="py-2 px-4 border-b">Single +£1.5</th>
                  <th class="py-2 px-4 border-b">Double +£3</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b">BBQ Sauce</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input
                      type="radio"
                      name="bbq-sauce"
                      value="single"
                      class=""
                    />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="bbq-sauce" value="double" />
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Garlic Sauce</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="garlic-sauce" value="single" />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="garlic-sauce" value="double" />
                  </td>
                </tr>
                <tr class="">
                  <td class="py-2 px-4 border-b">Hot BBQ Sauce</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="hot-bbq-sauce" value="single" />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="hot-bbq-sauce" value="double" />
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Smoky Sausage</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="smoky-sausage" value="single" />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="smoky-sausage" value="double" />
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Tomato Sauce</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="tomato-sauce" value="single" />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="tomato-sauce" value="double" />
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">No Sauce</td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="no-sauce" value="single" />
                  </td>
                  <td class="py-2 px-4 border-b text-center">
                    <input type="radio" name="no-sauce" value="double" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      {/* CHEESE */}

      <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">CHEESE</h2>

          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"> </th>
                  <th class="py-2 px-4 border-b">Single +£1.1</th>
                  <th class="py-2 px-4 border-b">Double +£2.2</th>
                </tr>
              </thead>

              <tbody>
                {cheesData.map((el, i) => {
                  return (
                    <tr>
                      <td class="py-2 px-4 border-b">{el.CheeseName}</td>

                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_single"
                          value="bbq-sauce"
                        />
                      </td>

                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_double"
                          value="bbq-sauce"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* VEGGETARIAN TOPPINGS */}

      <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">
            VEGGETARIAN TOPPINGS
          </h2>
          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"> </th>
                  <th class="py-2 px-4 border-b">Single +£1.1</th>
                  <th class="py-2 px-4 border-b">Double +£2.2</th>
                </tr>
              </thead>

              <tbody>
                {VEGGETARIAN.map((el, i) => {
                  return (
                    <tr>
                      <td class="py-2 px-4 border-b">{el.toppingName}</td>
                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_single"
                          value="bbq-sauce"
                        />
                      </td>

                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_double"
                          value="bbq-sauce"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MEAT TOPPINGS */}

      <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">MEAT TOPPINGS</h2>
          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"> </th>
                  <th class="py-2 px-4 border-b">Single +£1.1</th>
                  <th class="py-2 px-4 border-b">Double +£2.2</th>
                </tr>
              </thead>

              <tbody>
                {MEATTOPPINGS.map((el, i) => {
                  return (
                    <tr>
                      <td class="py-2 px-4 border-b">{el.toppingName}</td>

                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_single"
                          value="bbq-sauce"
                        />
                      </td>
                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_double"
                          value="bbq-sauce"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SEAFOOD TOPPINGS */}
      <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <div class="mt-4">
          <h2 class="text-lg font-semibold text-gray-800">SEAFOOD TOPPINGS</h2>
          <div class="mt-2 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b"> </th>
                  <th class="py-2 px-4 border-b">Single +£1.1</th>
                  <th class="py-2 px-4 border-b">Double +£2.2</th>
                </tr>
              </thead>
              <tbody>
                {SEAFOODTOPPINGS.map((el, i) => {
                  return (
                    <tr>
                      <td class="py-2 px-4 border-b">{el.toppingName}</td>

                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_single"
                          value="bbq-sauce"
                        />
                      </td>
                      <td class="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          name="sauce_double"
                          value="bbq-sauce"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <button className="bg-[#39A144] text-white w-full px-10 p-2 rounded">
          Save
        </button>
      </div>
    </>
  );
};

export default product;
