import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { postCheesePizza, postMeatTopping, postSaucePizza, postVegTopping } from "../../features/actions/pizza/postCustomization";



const FoodModal = forwardRef((props, ref) => {
  const dialogRef = useRef();
  const { register, handleSubmit,watch, setError, clearErrors  } = useForm({
    mode: "watch",
  });

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
    close: () => {
      dialogRef.current.close();
    },
  }));

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    
    if(props.itemName === 'SAUCE'){
      dispatch(postSaucePizza(data));
    }
    else if (props.itemName === 'CHEESE'){
      dispatch(postCheesePizza(data));
    }
      
    else if(props.itemName === 'MEAT TOPPINGS'){
      dispatch(postMeatTopping(data));
    }
    
    else if(props.itemName === "VEGETARIAN TOPPINGS"){
      dispatch(postVegTopping(data));
    }
      
    console.log(data);
  };

  const singlePrice = watch("singlePrice");
  const doublePrice = watch("doublePrice");

  const validatePrices = () => {
    if (!singlePrice && !doublePrice) {
      setError("singlePrice", { type: "manual", message: "At least one price must be entered" });
      setError("doublePrice", { type: "manual", message: "At least one price must be entered" });
      return false;
    } else {
      clearErrors("singlePrice");
      clearErrors("doublePrice");
      return true;
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
        <div className="relative ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl  text-slate-700 rounded-md font-semibold py-1 dark:text-white">
              {props?.itemName}
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
          <form onSubmit={handleSubmit((data) => {
              if (validatePrices()) {
                onSubmit(data);
                dialogRef.current.close();
              }
            })}>
            <div className="p-4 md:p-5 space-y-4">
              <div className="mb-4 space-y-1">
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="border p-[7px] rounded-md outline-slate-600 w-full"
                  placeholder={`Enter ${props.itemName}`}
                  required
                  minLength={2}
                  
                />
              </div>
              <div className="mb-4 space-y-1">
                <label htmlFor="singlePrice" className="block  font-medium text-gray-700">
                  Single
                </label>
                <input
                  id="singlePrice"
                  {...register("singlePrice")}
                  className="border p-[7px] rounded-md outline-slate-600 w-full"
                  placeholder="Price for Single"
                 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="doublePrice" className="block  font-medium text-gray-700">
                  Double
                </label>
                <input
                  id="doublePrice"
                  {...register("doublePrice")}
                  className="border p-[7px] rounded-md outline-slate-600 w-full"
                  placeholder="Price for Double"
              
                />
              </div>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
              <button
                type="button"
                className="py-2 px-5 ms-3 text-sm font-medium focus:outline-none bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-red-700  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => dialogRef.current.close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default FoodModal;
