import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdInsertPhoto } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

const EditDeals = () => {

  const { id } = useParams();
  const { dealData } = useSelector((state) => state.deals);
  const { pizzaData } = useSelector((state) => state.pizzaSlice);
  const { register, handleSubmit, formState: errors, control } = useForm();
  const [photo, setPhoto] = useState();
  
  const editDealData = dealData.data.data.find((el) => el._id === id);
  const defaultPhoto = editDealData.banner;
  // const pizzaIds = editDealData.pizzaData;
  // const pizzaDefaultsItems = pizzaData.filter();
  console.log("ghfsjf",pizzaDefaultsItems)

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];

    if (selectedPhoto) {

      const reader = new FileReader();
      reader.readAsDataURL(selectedPhoto);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    }
  };

  function handleSubmition(data)
  {
    console.log("gjsdgfsubmit",data);
  }

  console.log("hsdhkgfsd", editDealData);
  console.log("fsdf", id);
  return (
    <div>
      <h1 className='text-3xl p-2 bg-red-500 text-center text-white'>Edit Deal Card </h1>
      <form onSubmit={handleSubmit(handleSubmition)} className='grid grid-cols-2  justify-between items-center gap-2 p-14'>
        <div className="mb-5">
          <label htmlFor="dealName" className=" text-2xl block mb-2  font-medium text-gray-900 dark:text-white">Enter Deal Name</label>
          <input

            type='text'
            defaultValue={editDealData.title}
            {...register('title', {
              required: "Enter This Field",

              minLength: {
                value: 5,
                message: "Min Length of Deal is 5"
              },
              maxLength: {
                value: 100,
                message: "Max Length of Deal is 100"
              },
            })} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="deal name" />
          {
            errors.dealName && <p>
              {errors.dealName.message}
            </p>
          }
        </div>
        <div className='mb-5'>
          <label htmlFor="numberOfPizzas" className="text-2xl block mb-2  font-medium text-gray-900 dark:text-white">Enter Number of Pizza's</label>
          <input
            type="number"
            defaultValue={editDealData.chooseItems.pizzas}
            {...register('numberOfPizzas', {
              required: "This is required field",
              min: {
                value: 1,
                message: "Value Can be at least 0 ..."
              },
              max: {
                value: 20,
                message: "Max Value Can be  10 ..."
              },
            })} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pizzas" required />
          {
            errors.numberOfPizzas && <p>
              {errors.numberOfPizzas.message}
            </p>
          }
        </div>

        <div>
          <label htmlFor="numberOfDrinks" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Enter Number of Drink's </label>
          <input
            defaultValue={editDealData.chooseItems.drinks}
            type='Number'
            {...register('numberOfDrinks', {
              required: "This is required field",
              min: {
                value: 1,
                message: "Value Can be at least 0 ..."
              },
              max: {
                value: 20,
                message: "Max Value Can be  10 ..."
              },
            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="drinks" required />
          {
            errors.numberOfDrinks && <p>
              {errors.numberOfDrinks.message}
            </p>
          }
        </div>
        <div>
          <p className='font-bold text-md'>Select Drink Type</p>
          <Controller
            control={control}
            name="drinkType"
            render={({ field }) => (
              <Select
                {...field}
                defaultValue={[{ label: 'Can', value: 'Can' }, { label: 'Bottle', value: 'Bottle' }].find(el => el.value.toLowerCase === editDealData?.defaultDrinkType?.toLowerCase)}
                options={[{ label: 'Can', value: 'Can' }, { label: 'Bottle', value: 'Bottle' }]}
              />
            )}
          />
        </div>
        <div className="font-medium  space-y-6"> Deals Image

          <img className="mt-2 w-full h-50  sm:w-44 sm:h-36 rounded" src={photo || defaultPhoto} alt="No Image" />
          <label htmlFor="file_input" className="flex gap-1
" > <MdInsertPhoto size='25' />
            <div className="px-2 border rounded-md border-slate-300 hover:bg-red-500 hover:text-white hover:border-none">Click here to upload</div></label>

          <input
            {...register('banner', { required: true, onChange: (e) => { handlePhotoChange(e) } })}

            className="hidden " id="file_input" type="file" />
          {errors.banner && (
            <span className="text-sm font-medium text-red-500">
              Image is required
            </span>
          )}
        </div>
        <div>
              <p className='text-xl font-semibold'>Select Pizza Not To Include in Deals </p>
              {Array.isArray(pizzaData) && (
                <Controller
                  name="selectedpizzas"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      placeholder="Select Pizza's For Deals"
                      // defaultValue={pizzaData.filter(pizza => ({
                      //   value: pizza._id,
                      //   label: pizza.pizzaName,
                      // }))}
                      options={pizzaData.map(pizza => ({
                        value: pizza._id,
                        label: pizza.pizzaName,
                      }))}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(selectedOptions) => field.onChange(selectedOptions)}
                      value={field.value}
                    />
                  )}
                />
              )}
            </div>

      </form>
    </div>
  )
}

export default EditDeals