import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useDispatch } from "react-redux";
import {  updateBasePizza, updateCheesePizza, updateMeatTopping, updateSaucePizza, updateSizePizza, updateVegTopping  } from "../../../features/actions/pizza/patchCustomization";

const EditItem = forwardRef(({ data, itemName }, ref) => {
  
  const dispatch = useDispatch();
  const dialogRef = useRef();
  const { register, handleSubmit, control, setValue, reset } = useForm({
    mode: "onBlur",
  });

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
    close: () => {
      dialogRef.current.close();
    },
  }));

  useEffect(() => {
    if (data && (itemName === 'Base' || itemName === 'Size') ) {
      setValue("name", data.name);
      setValue("price", data.price);
    }
    else if(data )
      {
      setValue("name", data.name);
      setValue("singlePrice", data.singlePrice);
      setValue("doublePrice", data.doublePrice );
      }
  }, [data, setValue ,itemName]);

  const onSubmit = (submissionData) => {
    try {
      if (itemName === "Base") {
        dispatch(
          updateBasePizza({
            ...submissionData,
            _id: data._id,
          })
        );
      } else if(itemName === "Size"){
        dispatch(
          updateSizePizza({
            ...submissionData,
            _id: data._id,
          })
        );
      }
      else if(itemName === "SAUCE"){
        dispatch(
          updateSaucePizza({
            ...submissionData,
            _id: data._id,
          })
        );
        console.log(submissionData)
      }
      else if(itemName === "MEAT TOPPINGS"){
        dispatch(
          updateMeatTopping({
            ...submissionData,
            _id: data._id,
          })
        );
      }
      else if(itemName === "VEGETARIAN TOPPINGS"){
        dispatch(
          updateVegTopping({
            ...submissionData,
            _id: data._id,
          })
        );
      }
      else if(itemName === "CHEESE"){
        dispatch(
          updateCheesePizza({
            ...submissionData,
            _id: data._id,
          })
        );
      }

      reset(); // Reset the form fields
      dialogRef.current.close(); // Close the dialog
    } catch (e) {
      console.log("Error occurred ", e);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center rounded-2xl w-[500px] md:inset-0 max-h-full"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <legend>EDIT MODAL</legend> */}
        <div className="relative">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl  text-slate-700 rounded-md font-semibold py-1 dark:text-white">
              Item name : {data?.name}
            </h3>
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-600  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => dialogRef.current.close()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 md:p-5 space-y-4">
              <div className="mb-4 space-y-1">
                <label
                  htmlFor="name"
                  className="block  font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  className="border p-[7px] rounded-md outline-slate-600 w-full"
                />
              </div>

              {(itemName === "Base" || itemName === "Size") && (
                 <div className="mb-4 space-y-1">
                 <label
                   htmlFor="price"
                   className="block  font-medium text-gray-700"
                 >
                   Price
                 </label>
                 <input
                   {...register("price")}
                   className="outline-slate-600 border p-[7px] rounded-md  w-full"
                 />
               </div>
              )


              }
             

              {itemName !== "Base" && itemName != "Size" && (
                <>
                  <div className="mb-4 space-y-1">
                    <label
                      htmlFor="singlePrice"
                      className="block font-medium text-gray-700"
                    >
                      Single
                    </label>
                    <input
                      {...register("singlePrice")}
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="mb-4 space-y-1">
                    <label
                      htmlFor="doublePrice"
                      className="block font-medium text-gray-700"
                    >
                      Double
                    </label>
                    <input
                      {...register("doublePrice")}
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <button
                type="button"
                className="py-2 px-5 ms-3 text-sm font-medium focus:outline-none bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-red-700  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-7000"
                onClick={() => {
                  reset();
                  dialogRef.current.close();
                }}
              >
                Cancel
              </button>
            </div>
            <DevTool control={control} />
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default EditItem;
