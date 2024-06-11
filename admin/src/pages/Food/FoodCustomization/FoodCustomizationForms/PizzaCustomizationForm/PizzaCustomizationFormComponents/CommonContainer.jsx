import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRef } from "react";
import FoodModal from "../../../../../../components/FoodCustomizationDialog/FoodModal";

const CommonContainer = ({ itemName }) => {
  const modalRef = useRef();
  function handleModalOpen() {
    modalRef.current.open();
  }

  return (
    <>
      <FoodModal ref={modalRef} itemName={itemName} />
      <div className="sizeContainer flex flex-col">
        <div className="flex p-2 justify-between">
          <h3 className="text-red-500 font-bold tracking-widest text-lg">
            {itemName} :
          </h3>
          <div className="border-green-400 border" onClick={handleModalOpen}>
            <IoMdAddCircleOutline size={30} className="cursor-pointer " />
          </div>
        </div>
        <div className="p-2 gap-2">
          <div className="list p-3 border bg-white shadow-md border-gray-400 rounded-lg">
            <div className="">
              <div className="mx-auto mt-8  px-2">
                <div className="mt-6 overflow-hidden rounded-xl border shadow">
                  <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-2">
                    <thead className="hidden border-b lg:table-header-group">
                      <tr className="">
                        <td
                          width="50%"
                          className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                        >
                          Name
                        </td>

                        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                          Single
                        </td>

                        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                          Double
                        </td>

                        {/* <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td> */}
                      </tr>
                    </thead>

                    <tbody className="lg:border-gray-300">
                    <tr className="">
                        <td
                          width="50%"
                          className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                        >
                          BBQ Sauce
                          <div className="mt-1 lg:hidden">
                            <p className="font-normal text-gray-500">1.2$</p>
                          </div>
                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          2$
                        </td>

                        <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                          $59.00

                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white">
                            Edit
                          </div>
                        </td>
                      </tr>

                      <tr className="">
                        <td
                          width="50%"
                          className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                        >
                          BBQ Sauce
                          <div className="mt-1 lg:hidden">
                            <p className="font-normal text-gray-500">1.2$</p>
                          </div>
                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          2$
                        </td>

                        <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                          $59.00

                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white">
                            Edit
                          </div>
                        </td>
                      </tr>

                      <tr className="">
                        <td
                          width="50%"
                          className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                        >
                          BBQ Sauce
                          <div className="mt-1 lg:hidden">
                            <p className="font-normal text-gray-500">1.2$</p>
                          </div>
                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          2$
                        </td>

                        <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                          $59.00

                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white">
                            Edit
                          </div>
                        </td>
                      </tr>

                      <tr className="">
                        <td
                          width="50%"
                          className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                        >
                          BBQ Sauce
                          <div className="mt-1 lg:hidden">
                            <p className="font-normal text-gray-500">1.2$</p>
                          </div>
                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          2$
                        </td>

                        <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                          $59.00

                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white">
                            Edit
                          </div>
                        </td>
                      </tr>

                      <tr className="">
                        <td
                          width="50%"
                          className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                        >
                          BBQ Sauce
                          <div className="mt-1 lg:hidden">
                            <p className="font-normal text-gray-500">1.2$</p>
                          </div>
                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          2$
                        </td>

                        <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-gray-600 lg:text-left">
                          $59.00

                        </td>

                        <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs text-white">
                            Edit
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonContainer;
