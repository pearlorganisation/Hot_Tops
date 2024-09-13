import { DevTool } from '@hookform/devtools';
import React, {useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select'


export default function EditBaseModal({data,setEditModal}){
    console.log(data)
  const {size} = useSelector((state)=>state.pizza)
  const priceS = data.price;
  console.log("afadfa",priceS);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
} = useForm({
    defaultValues:{
      name: data.name,
      price:Array.isArray(priceS) && priceS.map((priceItem)=>{
        return {
       price: priceItem.price,
    //    size: {value:priceItem?.size, label:priceItem?.size?.name},
     }}) || [ {"price": "sdghjh"} ,{"price": "sdghjh"} ]

    }
})

const [selectedSizes, setSelectedSizes] = useState([]);
const sizeOptions = (size) =>
  size.filter(item => !selectedSizes.includes(item._id)).map(item => ({
    value: item?._id,
    label: item?.name,
  }));

const { fields: priceFields, append: appendPrice, remove: removePrice } = useFieldArray({
  control,
  name: "price"
});


  const dispatch = useDispatch();
  function onSubmit(data){
    const{price,name} = data
    const priceFilter= (price).map(item=>{ return {size:item?.size?.value,price:item?.price}})
    const newData = {name,price:priceFilter}

      dispatch(postBasePizza(newData));
      setEditModal((prev)=> !prev);
  }

  return (
    <div
    className="fixed top-0 left-0 z-1000 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
    aria-labelledby="header-3a content-3a"
    aria-modal="true"
    tabindex="-1"
    role="dialog"
  >
    {/*    <!-- Modal --> */}
    <div
      className="flex w-[80%] sm:w-[70%] h-full  flex-col gap-6  rounded bg-white p-6 pb-14 shadow-xl "
      id="modal"
      role="document"
    >
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      <div className="relative ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl  text-slate-700 rounded-md font-semibold py-1 dark:text-white">
            {data.itemName}
          </h3>
          <button
            type="button"
            className="text-white bg-red-500 hover:bg-red-600  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={setEditModal((prev)=> !prev)}
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
       <DevTool control={control}>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 md:p-5 space-y-4">
              <div className="mb-2 space-y-1">
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Name
                </label>
                <input
                defaultValue={data.name}
                  id="name"
                  {...register("name")}
                  className="border p-[7px] rounded-md outline-slate-600 w-full"
                  placeholder={`Enter ${data.itemName}`}
                  required
                  minLength={2}
                  
                />
              </div>
              <label className="font-medium text-gray-700">Size and Price </label>
<button
type="button"
className=" border rounded-md  bg-slate-700 text-white font-semibold text-xl px-2   hover:bg-slate-800"
onClick={() => appendPrice({ price: ""})}
>
+
</button>

<ul>
{priceFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex gap-5 ">
<div className="w-full mb-4 ">

    <Controller 
                                      control={control}
                                      name={`price.${index}.size`}
                                      render={({ field }) => (
                                          <Select
                               
                                              value={field.value}
                                              options={sizeOptions(size)}
                                              onChange={(selectedOption) => 
                                               { field.onChange(selectedOption)
                                                setSelectedSizes([...selectedSizes, selectedOption.value]);
                                              }}
                                              className="mt-2 "
                                              placeholder="Choose Pizza Size "
                                              styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    border: '1px solid #CBD5E1', // Set custom border style
                                                    borderRadius: '0.400rem', // Set custom border radius
                                                    height: '40px', // Add height here
                                                }),
                                                placeholder: (provided) => ({
                                                    ...provided,
                                                    color: '#9CA3AF', // Set custom placeholder color
                                                }),
                                            }}

                                              
 
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />

</div>
<div className="w-full ">

<input
{...register(`price.${index}.price`, { required: true })}
  type="text"
  placeholder="Price "
  className="w-full mt-2 px-5 py-[7px] text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>


</div>
{ index>0 && (
<button className=" border rounded-md bg-red-500 font-semibold text-white text-sm px-2  hover:bg-red-600" type="button" onClick={() => removePrice(index)}>Remove</button>)
}
</li>

))}
</ul>
{errors.priceSection && (
<span className="text-sm font-medium text-red-500">
  Both Fields are required
</span>
)}
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
              onClick={setEditModal((prev)=> !prev)}            >
              Cancel
            </button>
          </div>
          <DevTool control={control} />
        </form>
       </DevTool>
      </div>
    </div>
</div>
</div>
  );
}

