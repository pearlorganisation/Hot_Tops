import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPizzasFilter } from "../../../features/actions/pizza/getPizzasFilter";
import { useSelector } from "react-redux";
import { getPizzasCategories } from "../../../features/actions/pizza/getPizzasCategories";
import { useForm } from "react-hook-form";
import { createPizza } from "../../../features/actions/pizza/createPizza";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePizza = () => {
  const size = ["supersize", "large", "medium", "small"];
  // -------------------------hooks------------------------------------
  const dispatch = useDispatch();
  const { pizzaFilter } = useSelector((state) => state?.pizza);
  const { pizzaCategory } = useSelector((state) => state?.pizza);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // -------------------------------------useEffect---------------------------------
  useEffect(() => {
    dispatch(getPizzasFilter());
    dispatch(getPizzasCategories());
  }, []);

  // ---------------------------------functions----------------------------------
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    const { image, ...rest } = data;

    formData.append("banner", image[0]);
    formData.append("data", JSON.stringify(rest));
    dispatch(createPizza(formData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                    <select
                      id="filter"
                      className="p-2 border-2"
                      {...register("filter", { required: true })}
                    >
                      {Array.isArray(pizzaFilter?.data) &&
                        pizzaFilter?.data?.length > 0 &&
                        pizzaFilter?.data?.map((data, idx) => {
                          if (idx !== 0) {
                            return (
                              <option key={idx} value={data?._id}>
                                {data?.filter}
                              </option>
                            );
                          }
                        })}
                    </select>
                    {errors?.filter?.type === "required" && (
                      <p role="alert" className="text-sm text-red-600">
                        this field is required
                      </p>
                    )}
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" class="px-6 py-3">
                  Select category
                </th>
                <th scope="col" class="px-6 py-3">
                  <div>
                    <select
                      id="category"
                      className="p-2 border-2"
                      {...register("category", { required: true })}
                    >
                      {Array.isArray(pizzaCategory?.data) &&
                        pizzaCategory?.data?.length > 0 &&
                        pizzaCategory?.data?.map((data) => {
                          return (
                            <option value={data?._id}>{data?.category}</option>
                          );
                        })}
                    </select>
                    {errors?.category?.type === "required" && (
                      <p role="alert" className="text-sm text-red-600">
                        this field is required
                      </p>
                    )}
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" class="px-6 py-3">
                  image
                </th>
                <th scope="col" class="px-6 py-3">
                  <div>
                    <input
                      {...register("image", { required: true })}
                      id="name"
                      type="file"
                      className="p-2 border-2"
                    ></input>
                    {errors?.image?.type === "required" && (
                      <p role="alert" className="text-sm text-red-600">
                        this field is required
                      </p>
                    )}
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  <div>
                    <input
                      {...register("pizzaName", { required: true })}
                      id="name"
                      type="text"
                      className="p-2 border-2"
                    ></input>
                    {errors?.pizzaName?.type === "required" && (
                      <p role="alert" className="text-sm text-red-600">
                        this field is required
                      </p>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="flex gap-2 flex-col">
          <div>
            <label for="size" className=" font-semibold">
              PRICE(£)
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
                    <div class="flex items-center">Price(£)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {errors?.price?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600">
                    Please add the price in all the sizes
                  </p>
                )}
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
                          {...register(data, { required: true })}
                          id="name"
                          type="number"
                          min="0"
                          step="0.01"
                          className="p-2 border-2"
                        ></input>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <input
              type="submit"
              class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              value={"Submit"}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default CreatePizza;
