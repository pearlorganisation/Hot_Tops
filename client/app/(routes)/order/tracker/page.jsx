import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const page = () => {
  return (
    <section className=" py-4 md:py-2 rounded-2xl">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="my-8 font-bold text-xl text-center">
          THANKS , YOUR ORDER IS BEING DEALT WITH BY BATTLESEA STORE
        </h1>

        <div
          className="border-2 w-[70vw] h-full p-6 rounded-2xl "
          style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div>
            <p>
              {" "}
              <span className="text-red-600 font-bold">
                Status:
              </span> Accepted{" "}
            </p>
            <p>
              {" "}
              <span className="text-red-600 font-bold">
                {" "}
                Requested at :{" "}
              </span>{" "}
              13:30:00,Jul 2nd 2024
            </p>
            <p>
              {" "}
              <span className="text-red-600 font-bold">
                {" "}
                Estimated at :{" "}
              </span>{" "}
              13:30:00,Jul 2nd 2024
            </p>
          </div>

          <h1 className="mx-1 my-5 text-center">
            {" "}
            PIZZA DELIVERY AND TAKEAWAY DEALS IN BATTERSEA{" "}
          </h1>

          <div className="grid md:grid-cols-2   justify-center gap-4">
            <div className="flex flex-col  gap-1">
              <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2 ">
                <p>Monday </p>
                <p>11:30,01:00</p>
              </div>

              <div className="flex gap-2 px-3 py-2">
                <p>Tuesday </p>
                <p>11:30,01:00</p>
              </div>
              <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2  ">
                <p>Wednesday </p>
                <p>11:30,01:00</p>
              </div>
              <div className="flex gap-2 px-3 py-2">
                <p>Thursday </p>
                <p>11:30,01:00</p>
              </div>

              <div className="flex gap-2  border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2 ">
                <div className="border-1 border-blue-400" />
                <p>Friday </p>
                <p>11:30,01:00</p>
              </div>
              <div className="flex gap-2 px-3 py-2">
                <p>Saturday </p>
                <p>11:30,01:00</p>
              </div>
              <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2 ">
                <p>Sunday </p>
                <p>11:30,01:00</p>
              </div>
            </div>

            <div className=" text-center md:py-2  items-center md:block flex justify-center">
              <div className="md:w-1/2 md:flex-none flex flex-col  justify-center items-center ">
                <p>163 BatterSea Park Road , BatterSea Wandsworth SW84BU</p>
                <p className=" flex gap-3">
                  <BsFillTelephoneOutboundFill /> <p>0209713789</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
